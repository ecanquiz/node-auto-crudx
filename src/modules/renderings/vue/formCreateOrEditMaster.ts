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
  console.log(tableStructure)
  rendering(
    {
      template: './src/templates/vue/components/formCreateOrEditMaster',
      outputPath: 'src/components',
      outputFile: 'FormCreateOrEdit.vue'
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
