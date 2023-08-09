import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/views/createOrEditMaster',
    outputPath: `views/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'CreateOrEdit.vue'
  }
}
