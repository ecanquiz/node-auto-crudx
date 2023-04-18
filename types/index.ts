export type GetDataOfBDParams = {
    schema: string
    tableMaster: string
}

export type GetDataOfBDReturn = Promise<{
    namesList: any[][];
    schemasAndTablesOfBD: any[][];
    schemasOfBD: any[][];
    tableDetailForeignKeysAssoc: any[][];
    tableDetailOfMaster: any[][];
    tableForeignKeysAssocMasterDetail: any[][];
    tableMasterForeignKeysAssoc: any[][];
    tablePrimaryKey: any[][];
    tableStructure: any[][];
    tableUniqueConstraint: any[][];
    tablesOfBD: any[][];
  }>

export type fieldStructure = {
  column_name: string
  data_type: string
  character_maximum_length: number
  is_nullable: 'SI' | 'NO'
  column_default: string
}

export type TableDetailOfMaster = {
  table_name: string
  id_foreign_key: string
  id_master: string
}