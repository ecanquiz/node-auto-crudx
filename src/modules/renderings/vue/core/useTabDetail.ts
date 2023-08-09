import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/composables/useTabDetail',
      outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
      outputFile: `useTab${params.tableDetailCurrent!.tableNameSingularUCamelCase}.ts`
    },
    params
  )
}
