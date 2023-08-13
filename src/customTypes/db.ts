export type GetDataOfBDParams = {
    schema: string
    tableMaster: string
}

export type DataOfBD = {
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
  tablesStructureOfDetails: any[][]
}

export type GetDataOfBDReturn = Promise<DataOfBD>

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

export type TableMasterForeignKeysAssoc = {
  column_name: string
  foreign_table_name: string
  foreign_column_name: string | 'id'
  constraint_name: string,
  table_schema: string | 'public'
  foreignTableNameSingular?: string
  foreignTableNameUCamelCase?: string
  foreignTableNameSingularUCamelCase?: string
}

