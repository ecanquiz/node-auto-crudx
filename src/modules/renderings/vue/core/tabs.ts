import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/views/tabs',
    outputPath: `views/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'Tabs.vue'
  }
}
