import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/components/tabMaster',
      outputPath: `components/${params.tableMasterSingularUCamelCase}`,
      outputFile: `Tab${params.tableMasterSingularUCamelCase}.vue`
    },
    params
  )
}
