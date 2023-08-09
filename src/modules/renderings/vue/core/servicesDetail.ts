import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/services/detail',
    outputPath: `services/${params.tableMasterSingularUCamelCase}`,
    outputFile: `${params.tableDetailCurrent?.tableNameSingularUCamelCase}.ts`
  }
}
