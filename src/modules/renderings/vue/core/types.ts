import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/types/index',
      outputPath: `types/${params.tableMasterSingularUCamelCase}`,
      outputFile: `index.ts`
    },
    params
  )
}
