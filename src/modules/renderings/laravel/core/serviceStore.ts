import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/serviceStore',
    outputPath: `Http/Services/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Store${params.tableMasterSingularUCamelCase}Service.php`
  }
}
