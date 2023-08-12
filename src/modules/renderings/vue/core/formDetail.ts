import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/components/formDetail',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Form${params.tableDetailCurrent?.tableNameSingularUCamelCase}.vue`
  }
}
