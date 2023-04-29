import rendering from '@utils/rendering';
import type { ParamsMain } from '@customTypes/utilsRendering'

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean,
  output
}: ParamsMain): void => {
  rendering(
    {
      template: './src/templates/vue/views/createOrEditMaster',
      outputPath: 'views',
      outputFile: 'CreateOrEdit.vue'
    }, {
      tableMaster,
      tableMasterSingular,
      tableMasterUCamelCase,
      tableStructureClean
    },
    output
  )
}
