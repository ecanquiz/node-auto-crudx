import crud from '@config/crud'

import fn from '../utils/fn'
import type {
  GetDataOfBDParams,
  DataOfBD,
  fieldStructure,
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

  return {
    fn,
    tableMaster,
    tableStructure: dataOfBD.tableStructure,
    tableDetailOfMaster: crud.tableMasterIsHelper ? [] : dataOfBD.tableDetailOfMaster.map(
      r => ({
        idForeignKey: (r as unknown as TableDetailOfMaster).id_foreign_key, // TODO
        tableName: (r as unknown as TableDetailOfMaster).table_name, // TODO
        tableStructureOfDetails: dataOfBD.tablesStructureOfDetails.filter(
          (arr0)=> arr0[0].column_default === `nextval('${(r as unknown as TableDetailOfMaster).table_name}_id_seq'::regclass)`
        ),
        tableDetailForeignKeysHelp: dataOfBD.tableDetailForeignKeysHelp
          .filter(
            arr1 => (arr1[0].constraint_name).split('_')[0] === (r as unknown as TableDetailOfMaster).table_name
          )
          .map(
            arr2 => arr2.filter( a => a.foreign_table_name !== tableMaster)
          )[0]
      })
    ),
    tableMasterForeignKeysAssoc: dataOfBD.tableMasterForeignKeysAssoc,
    tableStructureClean
  };
}
