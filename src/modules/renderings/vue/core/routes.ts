import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/routes/index',
      outputPath: `routes`,
      outputFile: `index${params.tableMasterSingularUCamelCase}.ts`
    },
    params
  )
}
