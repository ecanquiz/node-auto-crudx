export type Rendering = {
  template: string;
  outputPath: string;
  outputFile: string;
}

export type ParamsMain = {
  tableMaster: string;
  tableMasterSingular: string
  tableMasterUCamelCase: string;
  tableStructureClean: string[][];
}

export type ParamsDetail = {
  tableDetailOfMaster: any[][] | string[];
}

export type Output = {
  output: string
}

export type ParamsAll = ParamsMain & ParamsDetail & Output;
