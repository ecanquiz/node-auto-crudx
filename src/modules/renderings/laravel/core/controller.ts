import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/controller',
    outputPath: `Http/Controllers`,
    outputFile: `${params.tableMasterSingularUCamelCase}Controller.php`
  }  
}
