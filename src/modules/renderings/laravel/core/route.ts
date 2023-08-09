import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/route',
    outputPath: `Routes`,
    outputFile: `api${params.tableMasterSingularUCamelCase}.php`
  }
}
