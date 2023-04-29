import {
  createOrEditMaster,
  datagrid,
  tabs
} from '@modules/renderings/vue'
import { pathFrontend as output } from '@config/output'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean,
  tableDetailOfMaster
}: ParamsAll): void => {
  createOrEditMaster({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean,
    output      
  })
  datagrid({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean,
    output       
  })
  if (tableDetailOfMaster) {
    tabs({
      tableMaster,
      tableMasterSingular,
      tableMasterUCamelCase,
      tableStructureClean,
      tableDetailOfMaster: (tableDetailOfMaster) as any[][],
      output
    })
  }
}
