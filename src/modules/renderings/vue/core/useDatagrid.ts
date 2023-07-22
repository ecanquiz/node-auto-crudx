import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/composables/useIndex',
      outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
      outputFile: 'useIndex.ts'
    },
    params
  )
}
