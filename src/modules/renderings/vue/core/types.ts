import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/types/index',
      outputPath: `types`,
      outputFile: `${params.tableMasterSingularUCamelCase}.ts`
    },
    params
  )
}
