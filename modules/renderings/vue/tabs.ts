import rendering from '../../../utils/rendering';
import type { TableDetailOfMaster } from '../../../types'
import type { ParamsMain, ParamsDetail } from '../../../types/utilsRendering';

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean,
  tableDetailOfMaster
}: ParamsMain & ParamsDetail): void => {
  rendering({
    template: './templates/vue/views/tabs',
    outputPath: 'views',
    outputFile: 'Tabs.vue'
  }, {
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean,
    tableDetailOfMaster: tableDetailOfMaster.map(
      r => (r as unknown as TableDetailOfMaster).table_name 
    )
  })
}
