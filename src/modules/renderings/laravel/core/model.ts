import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/model',
      outputPath: `Entities`,
      outputFile: `${params.tableMasterSingularUCamelCase}.php`
    },
    params
  )
}
