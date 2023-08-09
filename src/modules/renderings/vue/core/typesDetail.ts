import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/types/detail',
    outputPath: `types/${params.tableMasterSingularUCamelCase}`,
    outputFile: `${params.tableDetailCurrent!.tableNameSingularUCamelCase}.ts`
  }
}
