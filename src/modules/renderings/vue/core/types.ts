import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

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
      template: './src/templates/vue/types/index',
      outputPath: `types`,
      outputFile: `${tableMasterSingularUCamelCase}.ts`
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
