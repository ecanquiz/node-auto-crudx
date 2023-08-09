import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/components/formCreateOrEditMaster',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'FormCreateOrEdit.vue'
  }
}
