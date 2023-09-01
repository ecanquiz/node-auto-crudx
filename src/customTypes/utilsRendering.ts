export type Rendering = {
  template: string
  outputPath: string
  outputFile: string
}

export type ParamsMain = {
  pathModule?: string
  tableMaster: string
  tableMasterSingular: string
  tableMasterUCamelCase: string
  tableMasterSingularUCamelCase: string
  tableStructure: string[][],
  tableMasterForeignKeysAssoc: string[][]
}

export type tableDetailOfMasterCustomized = {
  tableName: string
  tableNameSingular: string
  tableNameUCamelCase: string
  tableNameSingularUCamelCase: string
  tableStructureOfDetails: any[] // PENDING BY CHECKOUT
}

export type ParamsDetail = {
  tableDetailOfMaster: any[][] | tableDetailOfMasterCustomized[]
  tableDetailCurrent?: tableDetailOfMasterCustomized
}

export type Output = {
  output: string
}

export type PathModule = {
  pathModule: string
}

export type ParamsAll = ParamsMain & ParamsDetail & Output 
