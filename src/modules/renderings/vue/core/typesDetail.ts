import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/types/detail',
      outputPath: `types/${params.tableMasterSingularUCamelCase}`,
      outputFile: `${params.tableDetailCurrent!.tableNameSingularUCamelCase}.ts`
    },
    params
  )
}
