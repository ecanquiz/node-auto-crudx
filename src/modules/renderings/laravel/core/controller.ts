import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/controller',
      outputPath: `Http/Controllers`,
      outputFile: `${params.tableMasterSingularUCamelCase}Controller.php`
    },
    params
  )
}
