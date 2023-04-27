import rendering from '@utils/rendering';
import type { TableDetailOfMaster } from '@customTypes/index'
import type { ParamsMain, ParamsDetail } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean,
  tableDetailOfMaster
}: ParamsMain & ParamsDetail): void => {
  rendering({
    template: './src/templates/vue/views/tabs',
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
