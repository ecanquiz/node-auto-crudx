//import * as consoleLog from '../utils/consoleLog'
import db from '../modules/db';
import type { GetDataOfBDParams, GetDataOfBDReturn } from '../types'

export default async ({schema, tableMaster, tableDetail}: GetDataOfBDParams):  GetDataOfBDReturn=> {
    const namesList = (
      await db.getNamesList()
    ).rows
  
    const schemasAndTablesOfBD = (
      await db.getSchemasAndTablesOfBD()
    ).rows
  
    const schemasOfBD = (
      await db.getSchemasOfBD()
    ).rows
  
    const tableDetailForeignKeysAssoc = (
      await db.getTableDetailForeignKeysAssoc({schema, tableMaster, tableDetail})
    ).rows
  
    const tableDetailOfMaster = (
      await db.getTableDetailOfMaster({schema, tableMaster})
    ).rows
  
    const tableForeignKeysAssocMasterDetail = (
      await db.getTableForeignKeysAssocMasterDetail({schema, tableMaster, tableDetail})
    ).rows
  
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
        tablesOfBD
      }  
  }