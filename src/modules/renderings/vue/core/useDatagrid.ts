import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/composables/useIndex',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'useIndex.ts'
  }
}
