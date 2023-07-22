import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/resource',
      outputPath: `Http/Resources`,
      outputFile: `${params.tableMasterSingularUCamelCase}Resource.php`
    },
    params
  )
}
