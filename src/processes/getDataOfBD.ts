//import * as consoleLog from '../utils/consoleLog'
import db from '@modules/db';
import colors from 'colors'

import type { GetDataOfBDParams, GetDataOfBDReturn, TableDetailOfMaster } from '@customTypes/db'

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

  const tableDetailOfMaster = (
    await db.getTableDetailOfMaster({schema, tableMaster})
  ).rows

  const tableDetailForeignKeysAssoc = await  Promise.all(tableDetailOfMaster.map(
    async r => ( await db.getTableDetailForeignKeysAssoc(
      {schema, tableMaster, tableDetail: (r as unknown as TableDetailOfMaster).table_name}
    )).rows
  ))

  const tableForeignKeysAssocMasterDetail = await  Promise.all(tableDetailOfMaster.map(
    async r => ( await db.getTableForeignKeysAssocMasterDetail(
      {schema, tableMaster, tableDetail: (r as unknown as TableDetailOfMaster).table_name}
    )).rows
  ))

  const tablesStructureOfDetails = await  Promise.all(tableDetailOfMaster.map(
    /*async r => [
      (r as unknown as TableDetailOfMaster).table_name,
      ... ( await db.getTableStructure(
        {schema, tableMaster: (r as unknown as TableDetailOfMaster).table_name}
      )).rows
    ]*/
    async r => ( await db.getTableStructure(
      {schema, tableMaster: (r as unknown as TableDetailOfMaster).table_name}
    )).rows
  ))

  const tableMasterForeignKeysAssoc = (
    await db.getTableMasterForeignKeysAssoc({schema, tableMaster})
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
    tableDetailOfMaster,
    tableForeignKeysAssocMasterDetail,
    tableMasterForeignKeysAssoc,
    tablePrimaryKey,
    tableStructure,
    tableUniqueConstraint,
    tablesOfBD,
    tablesStructureOfDetails
  }  
}
