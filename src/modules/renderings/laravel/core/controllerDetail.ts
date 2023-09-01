import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/controllerDetail',
    outputPath: `Http/Controllers`,
    outputFile: `${params.tableDetailCurrent?.tableNameSingularUCamelCase}Controller.php`
  }  
}
