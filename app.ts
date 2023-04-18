// import demo from './modules/renderings/demo'
import getDataOfBD from './processes/getDataOfBD'
import writeFrontend from './processes/writeFrontend'
import { uCamelCase } from './utils/nomenclature';
import { singular } from './utils/grammaticalNumber'
import type { GetDataOfBDParams, fieldStructure } from './types'

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
  
  writeFrontend({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean,
    tableDetailOfMaster
  })
}

main({
  schema: 'public',
  tableMaster: 'meetings',
}, [
  'updated_at',
  'created_at',
  'editing',
  'user_edit_id',
  'user_update_id',
  'user_insert_id'
])
