import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/composables/useCreateOrEdit',
      outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
      outputFile: 'useCreateOrEdit.ts'
    },
    params
  )
}
