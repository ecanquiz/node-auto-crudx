import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/serviceIndex',
      outputPath: `Http/Services/${params.tableMasterSingularUCamelCase}`,
      outputFile: `Index${params.tableMasterSingularUCamelCase}Service.php`
    },
    params
  )
}
