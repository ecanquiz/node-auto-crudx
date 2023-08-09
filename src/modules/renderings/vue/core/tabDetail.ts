import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/components/tabDetail',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Tab${params.tableDetailCurrent!.tableNameSingularUCamelCase}.vue`
  }
}
