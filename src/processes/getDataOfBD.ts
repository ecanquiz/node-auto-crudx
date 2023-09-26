//import * as consoleLog from '../utils/consoleLog'
import db from '@modules/db';
import colors from 'colors'

import type {
  GetDataOfBDParams,
  GetDataOfBDReturn,
  TableDetailsOfMaster,
} from '@customTypes/db'

const validateIfTableMasterExist = async ({schema, tableMaster}: GetDataOfBDParams):Promise<void> => {  
  const tableMasterExist = (
    await db.getTableMasterExist({schema, tableMaster})
  ).rows[0] as unknown as { table_name: string }

  if (!tableMasterExist) {
    console.log(
      colors.bgRed(`ERROR: THE MASTER TABLE NAME (${tableMaster}) DOES NOT EXIST IN DB.`)
    )
    process.exit();
    // throw new Error(error);
  }
}

export default async ({schema, tableMaster}: GetDataOfBDParams):  GetDataOfBDReturn=> {
  await validateIfTableMasterExist({schema, tableMaster})

  const namesList = (
    await db.getNamesList()
  ).rows

  const schemasAndTablesOfBD = (
    await db.getSchemasAndTablesOfBD()
  ).rows

  const schemasOfBD = (
    await db.getSchemasOfBD()
  ).rows

  const tableDetailsOfMaster = (
    await db.getTableDetailsOfMaster({schema, tableMaster})
  ).rows

  const tableDetailForeignKeysAssoc = await  Promise.all(tableDetailsOfMaster.map(
    async r => ( await db.getTableDetailForeignKeysAssoc(
      {schema, tableMaster, tableDetail: (r as unknown as TableDetailsOfMaster).table_name}
    )).rows
  ))

  const tableForeignKeysAssocMasterDetail = await  Promise.all(tableDetailsOfMaster.map(
    async r => ( await db.getTableForeignKeysAssocMasterDetail(
      {schema, tableMaster, tableDetail: (r as unknown as TableDetailsOfMaster).table_name}
    )).rows
  ))

  const tablesStructureOfDetails = await  Promise.all(tableDetailsOfMaster.map(
    /*async r => [
      (r as unknown as TableDetailsOfMaster).table_name,
      ... ( await db.getTableStructure(
        {schema, tableMaster: (r as unknown as TableDetailsOfMaster).table_name}
      )).rows
    ]*/
    async r => ( await db.getTableStructure(
      {schema, tableMaster: (r as unknown as TableDetailsOfMaster).table_name}
    )).rows
  ))

  const tableDetailForeignKeysHelp = await  Promise.all(tableDetailsOfMaster.map(
    async r => ( await db.getTableForeignKeysAssoc(
      {schema, tableMaster: (r as unknown as TableDetailsOfMaster).table_name}
    )).rows
    //.filter(r => ((r as unknown as TableForeignKeysAssoc).foreign_table_name) !== tableMaster)
  ))

  const tableForeignKeysAssoc = (
    await db.getTableForeignKeysAssoc({schema, tableMaster})
  ).rows

  const tablePrimaryKey = (
    await db.getTablePrimaryKey({schema, tableMaster})
  ).rows

  const tableStructure = (
    await db.getTableStructure({schema, tableMaster})
  ).rows

  const tableUniqueConstraint = (
    await db.getTableUniqueConstraint({schema, tableMaster})
  ).rows

  const tablesOfBD = (
    await db.getTablesOfBD({schema}, true)
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
