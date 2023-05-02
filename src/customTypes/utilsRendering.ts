export type Rendering = {
  template: string;
  outputPath: string;
  outputFile: string;
}

export type ParamsMain = {
  tableMaster: string;
  tableMasterSingular: string
  tableMasterUCamelCase: string
  tableMasterSingularUCamelCase: string
  tableStructure: string[][]
}

export type ParamsDetail = {
  tableDetailOfMaster: any[][] | string[];
}

export type Output = {
  output: string
}

export type ParamsAll = ParamsMain & ParamsDetail & Output;
