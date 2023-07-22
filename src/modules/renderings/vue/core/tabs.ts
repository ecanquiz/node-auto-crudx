import rendering from '@utils/rendering';
import type { TableDetailOfMaster } from '@customTypes/db'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/views/tabs',
      outputPath: `views/${params.tableMasterSingularUCamelCase}`,
      outputFile: 'Tabs.vue'
    }, {
      ...params,
      tableDetailOfMaster: params.tableDetailOfMaster.map(
        r => (r as unknown as TableDetailOfMaster).table_name 
      ),
    }
  )
}

