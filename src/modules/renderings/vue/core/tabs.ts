import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/views/tabs',
      outputPath: `views/${params.tableMasterSingularUCamelCase}`,
      outputFile: 'Tabs.vue'
    },
    params
  )
}

