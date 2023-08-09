import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/requestStore',
    outputPath: `Http/Requests/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Store${params.tableMasterSingularUCamelCase}Request.php`
  }
}
