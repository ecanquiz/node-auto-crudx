import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/services/index',
      outputPath: `services`,
      outputFile: `${params.tableMasterSingularUCamelCase}.ts`
    },
    params
  )
}
