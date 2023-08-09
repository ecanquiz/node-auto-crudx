import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/composables/useTabMaster',
      outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
      outputFile: `useTab${params.tableMasterSingularUCamelCase}.ts`
    },
    params
  )
}
