import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/route',
      outputPath: `Routes`,
      outputFile: `api${params.tableMasterSingularUCamelCase}.php`
    },
    params
  )
}
