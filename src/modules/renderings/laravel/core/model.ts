import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/model',
    outputPath: `Entities`,
    outputFile: `${params.tableMasterSingularUCamelCase}.php`
  }
}
