import colors from 'colors'
import { db } from '@core/index';
import type { DBConfig } from '@core/types/config'

import type {
  GetDataOfBDParams,
  GetDataOfBDReturn,
  TableDetailsOfMaster,
} from '@core/index'

export default async (dbConfig: DBConfig, {schema, tableMaster}: GetDataOfBDParams):  GetDataOfBDReturn=> {
  const ddbb= new db(dbConfig)

  const validateIfTableMasterExist = async ({schema, tableMaster}: GetDataOfBDParams):Promise<void> => {  
    const tableMasterExist = (
      await ddbb.getTableMasterExist({schema, tableMaster})
    ).rows[0] as unknown as { table_name: string }
  
    if (!tableMasterExist) {
      console.log(
        colors.bgRed(`ERROR: THE MASTER TABLE NAME (${tableMaster}) DOES NOT EXIST IN DB.`)
      )
      process.exit();
      // throw new Error(error);
    }
  }

  await validateIfTableMasterExist({schema, tableMaster})

  const namesList = (
    await ddbb.getNamesList()
  ).rows

  const schemasAndTablesOfBD = (
    await ddbb.getSchemasAndTablesOfBD()
  ).rows

  const schemasOfBD = (
    await ddbb.getSchemasOfBD()
  ).rows

  const tableDetailsOfMaster = (
    await ddbb.getTableDetailsOfMaster({schema, tableMaster})
  ).rows

  const tableDetailForeignKeysAssoc = await  Promise.all(tableDetailsOfMaster.map(
    async r => ( await ddbb.getTableDetailForeignKeysAssoc(
      {schema, tableMaster, tableDetail: (r as unknown as TableDetailsOfMaster).table_name}
    )).rows
  ))

  const tableForeignKeysAssocMasterDetail = await  Promise.all(tableDetailsOfMaster.map(
    async r => ( await ddbb.getTableForeignKeysAssocMasterDetail(
      {schema, tableMaster, tableDetail: (r as unknown as TableDetailsOfMaster).table_name}
    )).rows
  ))

  const tablesStructureOfDetails = await  Promise.all(tableDetailsOfMaster.map(
    /*async r => [
      (r as unknown as TableDetailsOfMaster).table_name,
      ... ( await ddbb.getTableStructure(
        {schema, tableMaster: (r as unknown as TableDetailsOfMaster).table_name}
      )).rows
    ]*/
    async r => ( await ddbb.getTableStructure(
      {schema, tableMaster: (r as unknown as TableDetailsOfMaster).table_name}
    )).rows
  ))

  const tableDetailForeignKeysHelp = await  Promise.all(tableDetailsOfMaster.map(
    async r => ( await ddbb.getTableForeignKeysAssoc(
      {schema, tableMaster: (r as unknown as TableDetailsOfMaster).table_name}
    )).rows
    //.filter(r => ((r as unknown as TableForeignKeysAssoc).foreign_table_name) !== tableMaster)
  ))

  const tableForeignKeysAssoc = (
    await ddbb.getTableForeignKeysAssoc({schema, tableMaster})
  ).rows

  const tablePrimaryKey = (
    await ddbb.getTablePrimaryKey({schema, tableMaster})
  ).rows

  const tableStructure = (
    await ddbb.getTableStructure({schema, tableMaster})
  ).rows

  const tableUniqueConstraint = (
    await ddbb.getTableUniqueConstraint({schema, tableMaster})
  ).rows

  const tablesOfBD = (
    await ddbb.getTablesOfBD({schema}, true)
  ).rows

  return {
    namesList,
    schemasAndTablesOfBD,
    schemasOfBD,
    tableDetailForeignKeysAssoc,
    tableDetailsOfMaster,
    tableForeignKeysAssocMasterDetail,
    tableForeignKeysAssoc,
    tablePrimaryKey,
    tableStructure,
    tableUniqueConstraint,
    tablesOfBD,
    tablesStructureOfDetails,
    tableDetailForeignKeysHelp
  }  
}
