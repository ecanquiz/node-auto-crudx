import datagrid from '../modules/renderings/vue/datagrid'

type DataGridParamas = {
  tableMaster: string;
  tableMasterSingular: string
  tableMasterUCamelCase: string;
  tableStructureClean: any[][];
}
  
export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean
}: DataGridParamas): void => {
  datagrid({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean        
  })  
}
