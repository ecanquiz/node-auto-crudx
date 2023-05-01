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
      template: './src/templates/vue/views/createOrEditMaster',
      outputPath: 'src/views',
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
