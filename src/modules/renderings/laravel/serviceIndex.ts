import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default ({
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure,
  output
}: Omit<ParamsAll, 'tableDetailOfMaster'>): void => {
  rendering(
    {
      template: './src/templates/laravel/serviceIndex',
      outputPath: `app/Http/Services/${tableMasterSingularUCamelCase}`,
      outputFile: `Index${tableMasterSingularUCamelCase}Services.php`
    }, {
      tableMaster,
      tableMasterUCamelCase,
      tableMasterSingular,
      tableMasterSingularUCamelCase,
      tableStructure
    },
    output
  )
}
