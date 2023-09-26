export type ParamsMain = {
  pathModule?: string
  tableMaster: string
  tableStructure: string[][],
  tableForeignKeysAssoc: string[][]
}

export type tableDetailOfMasterCustomized = {
  tableName: string
  //tableNameSingular: string
  //tableNameUCamelCase: string
  //tableNameSingularUCamelCase: string
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

export type Rendering = {
  outputFile: string
  outputPath: string
  params: ParamsAll
  template: string
}
