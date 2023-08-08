import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/components/tabDetail',
      outputPath: `components/${params.tableMasterSingularUCamelCase}`,
      outputFile: `Tab${params.tableDetailCurrent!.tableNameSingularUCamelCase}.vue`
    },
    params
  )
}
