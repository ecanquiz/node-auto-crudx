import {
  createOrEditMaster,
  datagrid,
  tabs
} from '@modules/renderings/vue'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean:any,
  tableDetailOfMaster,  
}: ParamsAll): void => {
  /*createOrEditMaster({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
  })
  datagrid({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
  })
  if (tableDetailOfMaster) {
    tabs({
      tableMaster,
      tableMasterSingular,
      tableMasterUCamelCase,
      tableDetailOfMaster: (tableDetailOfMaster) as any[][]
    })
  }*/
}
