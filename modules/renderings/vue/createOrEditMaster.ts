import rendering from '../../../utils/rendering';
import type { ParamsMain } from '../../../types/utilsRendering';

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean
}: ParamsMain): void => {
  rendering({
    template: './templates/vue/views/createOrEditMaster',
    outputPath: 'views',
    outputFile: 'CreateOrEdit.vue'
  }, {
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean
  })
}
