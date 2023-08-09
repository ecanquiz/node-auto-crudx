import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default (params: ParamsAll): Rendering => {
  return {
    template: './src/templates/laravel/requestUpdate',
    outputPath: `Http/Requests/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Update${params.tableMasterSingularUCamelCase}Request.php`
  }
}
