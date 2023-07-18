import rendering from '@utils/rendering';
import type { TableDetailOfMaster } from '@customTypes/db'
import type { ParamsAll } from '@customTypes/utilsRendering';

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
      template: './src/templates/vue/views/tabs',
      outputPath: `views/${tableMasterSingularUCamelCase}`,
      outputFile: 'Tabs.vue'
    }, {
      tableMaster,
      tableMasterUCamelCase,
      tableMasterSingular,
      tableMasterSingularUCamelCase,
      tableStructure,
      tableDetailOfMaster: tableDetailOfMaster.map(
        r => (r as unknown as TableDetailOfMaster).table_name 
      ),
      tableMasterForeignKeysAssoc
    },
    output
  )
}

