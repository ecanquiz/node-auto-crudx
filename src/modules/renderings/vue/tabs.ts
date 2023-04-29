import rendering from '@utils/rendering';
import type { TableDetailOfMaster } from '@customTypes/db'
import type { ParamsMain, ParamsDetail } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean,
  tableDetailOfMaster,
  output
}: ParamsMain & ParamsDetail): void => {
  rendering(
    {
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
    },
    output
  )
}
