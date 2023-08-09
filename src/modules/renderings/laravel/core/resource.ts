import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {  
  return {
    template: './src/templates/laravel/resource',
    outputPath: `Http/Resources`,
    outputFile: `${params.tableMasterSingularUCamelCase}Resource.php`
  }
}
