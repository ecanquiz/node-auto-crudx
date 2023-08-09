import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/components/tabMaster',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Tab${params.tableMasterSingularUCamelCase}.vue`
  }
}
