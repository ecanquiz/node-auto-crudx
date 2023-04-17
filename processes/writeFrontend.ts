import createOrEditMaster from '../modules/renderings/vue/createOrEditMaster'
import datagrid from '../modules/renderings/vue/datagrid'
import tabs from '../modules/renderings/vue/tabs'


type DataGridParamas = {
  tableMaster: string;
  tableMasterSingular: string
  tableMasterUCamelCase: string;
  tableStructureClean: any[][];
  tableDetailOfMaster: any[][];
}
  
export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean,
  tableDetailOfMaster
}: DataGridParamas): void => {
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

  tabs({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean,
    tableDetailOfMaster     
  })
}
