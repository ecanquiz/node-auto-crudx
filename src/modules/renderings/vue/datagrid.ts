import rendering from '../../../utils/rendering';
import type { ParamsMain } from '../../../types/utilsRendering';

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean
}: ParamsMain): void => {
  rendering({
    template: './src/templates/vue/views/index',
    outputPath: 'views',
    outputFile: 'Index.vue'
  }, {
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean
  })
}
