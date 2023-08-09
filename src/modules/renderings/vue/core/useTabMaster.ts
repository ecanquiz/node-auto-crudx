import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/composables/useTabMaster',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: `useTab${params.tableMasterSingularUCamelCase}.ts`
  }
}
