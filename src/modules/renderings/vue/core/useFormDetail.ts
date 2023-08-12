import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/composables/useFormDetail',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: `useForm${params.tableDetailCurrent!.tableNameSingularUCamelCase}.ts`
  }
}
