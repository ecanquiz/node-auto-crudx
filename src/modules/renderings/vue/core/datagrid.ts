import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return{
    template: './src/templates/vue/views/index',
    outputPath: `views/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'Index.vue'
  }
}
