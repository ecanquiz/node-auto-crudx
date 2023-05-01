import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean,
  output
}: Omit<ParamsAll, 'tableDetailOfMaster'>): void => {
  rendering(
    {
      template: './src/templates/vue/views/index',
      outputPath: 'src/views',
      outputFile: 'Index.vue'
    }, {
      tableMaster,
      tableMasterSingular,
      tableMasterUCamelCase,
      tableStructureClean
    },
    output
  )
}
