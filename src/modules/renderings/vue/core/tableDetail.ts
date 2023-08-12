import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/components/tableDetail',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Table${params.tableDetailCurrent?.tableNameSingularUCamelCase}.vue`
  }
}
