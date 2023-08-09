import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/composables/useTabDetail',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: `useTab${params.tableDetailCurrent!.tableNameSingularUCamelCase}.ts`
  }
}
