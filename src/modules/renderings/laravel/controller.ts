import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean,
  output
}: Omit<ParamsAll, 'tableDetailOfMaster'>): void => {
  rendering(
    {
      template: './src/templates/laravel/controller',
      outputPath: 'app/Http/Controllers',
      outputFile: `${tableMasterUCamelCase}Controller.php`
    }, {
      tableMaster,
      tableMasterSingular,
      tableMasterUCamelCase,
      tableStructureClean
    },
    output
  )
}
