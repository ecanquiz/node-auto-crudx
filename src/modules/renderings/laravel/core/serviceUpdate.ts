import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/serviceUpdate',
    outputPath: `Http/Services/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Update${params.tableMasterSingularUCamelCase}Service.php`
  }  
}
