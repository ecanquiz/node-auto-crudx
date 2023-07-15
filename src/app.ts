// import demo from './modules/renderings/demo'
import 'module-alias/register';
import crud from '@config/crud'
import getDataOfBD from './processes/getDataOfBD'
import writeBackend from './processes/writeBackend'
import writeFrontend from './processes/writeFrontend'
import { uCamelCase } from './utils/nomenclature';
import { singular } from './utils/grammaticalNumber'
import type { GetDataOfBDParams, fieldStructure } from '@customTypes/db'

const main = async (getDataOfBDParams: GetDataOfBDParams, excludeFields: string[]) => {
  const {
    // namesList,
    // schemasAndTablesOfBD,
    // schemasOfBD,
    // tableDetailForeignKeysAssoc,
    tableDetailOfMaster,
    // tableForeignKeysAssocMasterDetail,
    tableMasterForeignKeysAssoc,
    // tablePrimaryKey,
    tableStructure,
    // tableUniqueConstraint,
    // tablesOfBD
  } = await getDataOfBD(getDataOfBDParams)
  // console.log("namesList:", namesList)
  // console.log("schemasAndTablesOfBD:", schemasAndTablesOfBD)
  // console.log("schemasOfBD:", schemasOfBD)
  // console.log("tableDetailForeignKeysAssoc:", tableDetailForeignKeysAssoc)
  // console.log("tableDetailOfMaster:", tableDetailOfMaster)
  // console.log("tableForeignKeysAssocMasterDetail:", tableForeignKeysAssocMasterDetail)
  // console.log("tableMasterForeignKeysAssoc:", tableMasterForeignKeysAssoc)
  // console.log("tablePrimaryKey:", tablePrimaryKey)
  // console.log("tableStructure:", tableStructure)
  // console.log("tableUniqueConstraint:", tableUniqueConstraint)
  // console.log("tablesOfBD:", tablesOfBD)
  const tableMaster: string = getDataOfBDParams.tableMaster
  const tableMasterUCamelCase: string = uCamelCase(getDataOfBDParams.tableMaster)
  const tableMasterSingular: string = singular(getDataOfBDParams.tableMaster)
  const tableMasterSingularUCamelCase: string = uCamelCase(tableMasterSingular)
  const tableStructureClean: string[][] = tableStructure.filter(    
    field => !(excludeFields.includes((field as unknown as fieldStructure).column_name))
  )
  // console.log("tableMaster:", tableMaster)
  // console.log("tableMasterUCamelCase:", tableMasterUCamelCase)
  // console.log("tableMasterSingular:", tableMasterSingular)
  // console.log("tableMasterSingularUCamelCase:", tableMasterSingularUCamelCase)
  // console.log("tableStructureClean:", tableStructureClean)
  const params = {
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    tableDetailOfMaster
  }
  writeBackend(params)
  params.tableStructure = tableStructureClean
  writeFrontend(params)
}

main({
  schema: crud.schema || 'public', 
  tableMaster: crud.tableMaster || 'users',
}, crud.excludeFields ?? [])
