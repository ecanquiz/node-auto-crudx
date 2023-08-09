import type { ParamsAll, Rendering } from '@customTypes/utilsRendering';

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/vue/routes/index',
    outputPath: `routes`,
    outputFile: `index${params.tableMasterSingularUCamelCase}.ts`
  }
}
