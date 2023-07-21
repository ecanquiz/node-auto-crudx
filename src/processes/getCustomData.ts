
import type { GetDataOfBDParams, DataOfBD, fieldStructure, TableMasterForeignKeysAssoc } from '@customTypes/db'
import { uCamelCase } from '../utils/nomenclature';
import { singular } from '../utils/grammaticalNumber'

export default (
  getDataOfBDParams: GetDataOfBDParams,
  dataOfBD: DataOfBD,
  excludeFields: string[]
) => {  
  const tableMaster: string = getDataOfBDParams.tableMaster
  const tableMasterUCamelCase: string = uCamelCase(getDataOfBDParams.tableMaster)
  const tableMasterSingular: string = singular(getDataOfBDParams.tableMaster)
  const tableMasterSingularUCamelCase: string = uCamelCase(tableMasterSingular)
  const tableStructureClean: string[][] = dataOfBD.tableStructure.filter(    
    field => !(excludeFields.includes((field as unknown as fieldStructure).column_name))
  )
  dataOfBD.tableMasterForeignKeysAssoc.forEach(    
    tbl => {
      const foreignTableName = (tbl as unknown as TableMasterForeignKeysAssoc).foreign_table_name;
      (tbl as unknown as TableMasterForeignKeysAssoc).columnNameSingular = singular((foreignTableName));
      (tbl as unknown as TableMasterForeignKeysAssoc).columnNameUCamelCase = uCamelCase((foreignTableName));
      (tbl as unknown as TableMasterForeignKeysAssoc).columnNameSingularUCamelCase = uCamelCase(singular((foreignTableName)));
    }
  )

  return {
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure: dataOfBD.tableStructure,
    tableDetailOfMaster: dataOfBD.tableDetailOfMaster,
    tableMasterForeignKeysAssoc: dataOfBD.tableMasterForeignKeysAssoc,
    tableStructureClean
  }
}
