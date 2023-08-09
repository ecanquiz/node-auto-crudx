import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/serviceIndex',
    outputPath: `Http/Services/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Index${params.tableMasterSingularUCamelCase}Service.php`
  }
}
