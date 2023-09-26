export type ParamsMain = {
  pathModule?: string
  tableMaster: string
  tableStructure: string[][],
  tableForeignKeysAssoc: string[][]
}

export type tableDetailsOfMasterCustomized = {
  tableName: string
  tableStructure: any[] // PENDING BY CHECKOUT
}

export type ParamsDetail = {
  tableDetailsOfMaster: any[][] | tableDetailsOfMasterCustomized[]
  tableDetailsCurrent?: tableDetailsOfMasterCustomized
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
