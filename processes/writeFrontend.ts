import {
  createOrEditMaster,
  datagrid,
  tabs
} from '../modules/renderings/vue'
import type { ParamsAll } from '../types/utilsRendering';

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
    tableStructureClean        
  })
  datagrid({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean        
  })
  if (tableDetailOfMaster) {
    tabs({
      tableMaster,
      tableMasterSingular,
      tableMasterUCamelCase,
      tableStructureClean,
      tableDetailOfMaster: (tableDetailOfMaster) as any[][]
    })
  }
}
