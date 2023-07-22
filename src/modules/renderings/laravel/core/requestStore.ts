import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/requestStore',
      outputPath: `Http/Requests/${params.tableMasterSingularUCamelCase}`,
      outputFile: `Store${params.tableMasterSingularUCamelCase}Request.php`
    }, 
    params
  )
}
