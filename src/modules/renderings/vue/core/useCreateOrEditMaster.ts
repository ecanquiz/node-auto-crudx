import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/composables/useCreateOrEdit',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'useCreateOrEdit.ts'
  }
}
