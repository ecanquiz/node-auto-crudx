import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/services/index',
    outputPath: `services/${params.tableMasterSingularUCamelCase}`,
    outputFile: `index.ts`
  }
}
