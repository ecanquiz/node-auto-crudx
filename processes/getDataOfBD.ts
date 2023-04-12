import db from '../modules/db';
//import * as consoleLog from '../utils/consoleLog'

export default async () => {
    const namesList = (await db.getNamesList()).rows
  
    const schemasAndTablesOfBD = (await db.getSchemasAndTablesOfBD()).rows
  
    const schemasOfBD = (await db.getSchemasOfBD()).rows
  
    const tableDetailForeignKeysAssoc = (await db.getTableDetailForeignKeysAssoc({
      schema: 'public',
      tableMaster: 'products',
      tableDetail: 'presentations'
    })).rows
  
    const tableDetailOfMaster = (await db.getTableDetailOfMaster({
      schema: 'public',
      tableMaster: 'products'
    })).rows
  
    const tableForeignKeysAssocMasterDetail = (await db.getTableForeignKeysAssocMasterDetail({
      schema: 'public',
      tableMaster: 'products',
      tableDetail: 'presentations'
    })).rows
  
    const tableMasterForeignKeysAssoc = (await db.getTableMasterForeignKeysAssoc({
      schema: 'public',
      tableMaster: 'products'
    })).rows
  
    const tablePrimaryKey = (await db.getTablePrimaryKey({
      schema: 'public',
      tableMaster: 'products'
    })).rows
  
    const tableStructure = (await db.getTableStructure({
      schema: 'public',
      tableMaster: 'products'
    })).rows
  
    const tableUniqueConstraint = (await db.getTableUniqueConstraint({
      schema: 'public',
      tableMaster: 'products'
    })).rows
  
    const tablesOfBD = (await db.getTablesOfBD({ schema: 'public' }, true)).rows
  
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