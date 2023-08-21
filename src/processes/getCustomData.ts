
import type {
  GetDataOfBDParams,
  DataOfBD,
  fieldStructure,
  TableMasterForeignKeysAssoc,
  TableDetailOfMaster
} from '@customTypes/db'
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
      (tbl as unknown as TableMasterForeignKeysAssoc).foreignTableNameSingular = singular((foreignTableName));
      (tbl as unknown as TableMasterForeignKeysAssoc).foreignTableNameUCamelCase = uCamelCase((foreignTableName));
      (tbl as unknown as TableMasterForeignKeysAssoc).foreignTableNameSingularUCamelCase = uCamelCase(singular((foreignTableName)));
    }
  )
  //console.log(dataOfBD.tablesStructureOfDetails)
  const x = {
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure: dataOfBD.tableStructure,
    tableDetailOfMaster: dataOfBD.tableDetailOfMaster.map(
      r => ({
        tableName: (r as unknown as TableDetailOfMaster).table_name,
        tableNameSingular: singular((r as unknown as TableDetailOfMaster).table_name),
        tableNameUCamelCase: uCamelCase((r as unknown as TableDetailOfMaster).table_name),
        tableNameSingularUCamelCase: uCamelCase(singular((r as unknown as TableDetailOfMaster).table_name)),
        tableStructureOfDetails: dataOfBD.tablesStructureOfDetails.filter(
          (arr)=> arr[0].column_default===`nextval('${(r as unknown as TableDetailOfMaster).table_name}_id_seq'::regclass)`
        )
      })
    ),
    tableMasterForeignKeysAssoc: dataOfBD.tableMasterForeignKeysAssoc,
    tableStructureClean
  }
  /*console.log(x.tableDetailOfMaster[0])
  console.log(x.tableDetailOfMaster[0].tableStructureOfDetails)
  console.log(x.tableDetailOfMaster[1])
  console.log(x.tableDetailOfMaster[1].tableStructureOfDetails)
  console.log(x.tableDetailOfMaster[2])
  console.log(x.tableDetailOfMaster[2].tableStructureOfDetails)*/

  return x
}



/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//////////////////////////

let gente = [
    {nombre: "aaron", edad: 65},
    {nombre: "beth", edad: 2},
    {nombre: "cara", edad: 13},
    {nombre: "daniel", edad: 3},
    {nombre: "ella", edad: 25},
    {nombre: "fin", edad: 1},
    {nombre: "george", edad: 43},
]

let pequeños = gente.filter(persona => persona.edad <= 3)

console.log(pequeños);


*/
