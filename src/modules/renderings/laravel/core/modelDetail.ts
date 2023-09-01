import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/modelDetail',
    outputPath: `Entities`,
    outputFile: `${params.tableDetailCurrent?.tableNameSingularUCamelCase}.php`
  }
}
