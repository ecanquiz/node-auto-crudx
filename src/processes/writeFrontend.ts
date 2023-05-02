import {
  createOrEditMaster,
  datagrid,
  tabs
} from '@modules/renderings/vue'
import { pathFrontend as output } from '@config/output'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure,
  tableDetailOfMaster
}: Omit<ParamsAll, 'output'>): void => {
  createOrEditMaster({
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    output      
  })
  datagrid({
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    output       
  })
  if (tableDetailOfMaster) {
    tabs({
      tableMaster,
      tableMasterUCamelCase,
      tableMasterSingular,
      tableMasterSingularUCamelCase,
      tableStructure,
      tableDetailOfMaster: (tableDetailOfMaster) as string[],
      output
    })
  }
}
