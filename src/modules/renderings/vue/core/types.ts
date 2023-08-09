import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/types/index',
    outputPath: `types/${params.tableMasterSingularUCamelCase}`,
    outputFile: `index.ts`
  }
}
