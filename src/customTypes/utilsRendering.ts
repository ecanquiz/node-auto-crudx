export type Rendering = {
  template: string;
  outputPath: string;
  outputFile: string;
}

export type ParamsMain = {
  tableMaster: string;
  tableMasterSingular: string
  tableMasterUCamelCase: string;
  tableStructureClean: any[][];
  output: string;
}

export type ParamsDetail = {
  tableDetailOfMaster: any[][];
}

export type ParamsAll = {
  tableMaster: string;
  tableMasterSingular: string
  tableMasterUCamelCase: string;
  tableStructureClean: any[][];
  tableDetailOfMaster?: any[][] | string[];
}
