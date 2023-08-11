import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/components/formMaster',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Form${params.tableMasterSingularUCamelCase}.vue`
  }
}
