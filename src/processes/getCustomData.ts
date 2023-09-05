import crud from '@config/crud'
// import { uCamelCase, camelCase } from '../utils/nomenclature';
// import { singular } from '../utils/grammaticalNumber'
import fn from '../utils/fn'
import type {
  GetDataOfBDParams,
  DataOfBD,
  fieldStructure,
  TableMasterForeignKeysAssoc,
  TableDetailOfMaster
} from '@customTypes/db'

export default (
  getDataOfBDParams: GetDataOfBDParams,
  dataOfBD: DataOfBD,
  excludeFields: string[]
) => {
  const tableMaster: string = getDataOfBDParams.tableMaster
  const tableStructureClean: string[][] = dataOfBD.tableStructure.filter(    
    field => !(excludeFields.includes((field as unknown as fieldStructure).column_name))
  )
  dataOfBD.tableMasterForeignKeysAssoc.forEach(    
    tbl => {
      const foreignTableName = (tbl as unknown as TableMasterForeignKeysAssoc).foreign_table_name;
      //(tbl as unknown as TableMasterForeignKeysAssoc).foreignTableNameSingular = singular((foreignTableName));
      //(tbl as unknown as TableMasterForeignKeysAssoc).foreignTableNameUCamelCase = uCamelCase((foreignTableName));
      //(tbl as unknown as TableMasterForeignKeysAssoc).foreignTableNameSingularUCamelCase = uCamelCase(singular((foreignTableName)));
    }
  )  

  return {
    fn,
    tableMaster,
    tableStructure: dataOfBD.tableStructure,
    tableDetailOfMaster: crud.tableMasterIsHelper ? [] : dataOfBD.tableDetailOfMaster.map(
      r => ({
        idForeignKey: (r as unknown as TableDetailOfMaster).id_foreign_key, // TODO
        tableName: (r as unknown as TableDetailOfMaster).table_name, // TODO
        //tableNameSingular: singular((r as unknown as TableDetailOfMaster).table_name),
        //tableNameUCamelCase: uCamelCase((r as unknown as TableDetailOfMaster).table_name),
        //tableNameSingularUCamelCase: uCamelCase(singular((r as unknown as TableDetailOfMaster).table_name)),
        tableStructureOfDetails: dataOfBD.tablesStructureOfDetails.filter(
          (arr)=> arr[0].column_default===`nextval('${(r as unknown as TableDetailOfMaster).table_name}_id_seq'::regclass)`
        )
      })
    ),
    tableMasterForeignKeysAssoc: dataOfBD.tableMasterForeignKeysAssoc,
    tableStructureClean
  }

}
