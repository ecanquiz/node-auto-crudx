import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/routeDetail',
    outputPath: `Routes`,
    outputFile: `api${params.tableDetailCurrent?.tableNameSingularUCamelCase}.php`
  }
}
