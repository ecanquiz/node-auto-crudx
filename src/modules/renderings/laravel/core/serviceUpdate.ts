import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/serviceUpdate',
      outputPath: `Http/Services/${params.tableMasterSingularUCamelCase}`,
      outputFile: `Update${params.tableMasterSingularUCamelCase}Service.php`
    },
    params
  )
}
