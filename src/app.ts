// import demo from './modules/renderings/demo'
import 'module-alias/register';
import crud from '@config/crud'
import getDataOfBD from './processes/getDataOfBD'
//import writeBackend from './processes/writeBackend'
import writeFrontend from './processes/writeFrontend'
import { uCamelCase } from './utils/nomenclature';
import { singular } from './utils/grammaticalNumber'
import type { GetDataOfBDParams, fieldStructure } from '@customTypes/index'

const main = async (getDataOfBDParams: GetDataOfBDParams, excludeFields: string[]) => {
  const {
    tableStructure,
    tableDetailOfMaster
  } = await getDataOfBD(getDataOfBDParams)

  const tableMaster: string = getDataOfBDParams.tableMaster
  const tableMasterSingular: string = singular(getDataOfBDParams.tableMaster)
  const tableMasterUCamelCase: string = uCamelCase(getDataOfBDParams.tableMaster)
  const tableStructureClean: string[][] = tableStructure.filter(
    field => !(excludeFields.includes((field as unknown as fieldStructure).column_name))
  )
  
 /* writeBackend({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableDetailOfMaster
  })*/

  writeFrontend({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean,
    tableDetailOfMaster
  })
}

main({
  schema: crud.schema || 'public', 
  tableMaster: crud.tableMaster || 'users',
}, crud.excludeFields ?? [])
