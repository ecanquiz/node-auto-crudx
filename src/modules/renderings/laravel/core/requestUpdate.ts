import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/requestUpdate',
      outputPath: `Http/Requests/${params.tableMasterSingularUCamelCase}`,
      outputFile: `Update${params.tableMasterSingularUCamelCase}Request.php`
    },
    params
  )
}
