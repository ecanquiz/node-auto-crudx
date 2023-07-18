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
      template: './src/templates/vue/components/formCreateOrEditMaster',
      outputPath: `components/${tableMasterSingularUCamelCase}`,
      outputFile: 'FormCreateOrEdit.vue'
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
