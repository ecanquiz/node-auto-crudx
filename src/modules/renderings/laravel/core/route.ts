import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default ({
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure,
  tableDetailOfMaster,
  tableMasterForeignKeysAssoc,
  output
}: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/route',
      outputPath: `Routes`,
      outputFile: `api${tableMasterSingularUCamelCase}.php`
    }, {
      tableMaster,
      tableMasterUCamelCase,
      tableMasterSingular,
      tableMasterSingularUCamelCase,
      tableStructure,
      tableDetailOfMaster,
      tableMasterForeignKeysAssoc
    },
    output
  )
}
