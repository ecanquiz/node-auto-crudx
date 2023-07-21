// import demo from './modules/renderings/demo'
import 'module-alias/register';
import crud from '@config/crud'
import getDataOfBD from './processes/getDataOfBD'
import getCustomData from './processes/getCustomData'
import writeBackend from './processes/writeBackend'
import writeFrontend from './processes/writeFrontend'
import type { GetDataOfBDParams } from '@customTypes/db'

const main = async (getDataOfBDParams: GetDataOfBDParams, excludeFields: string[]) => {
  const dataOfBD = await getDataOfBD(getDataOfBDParams)  
  const customData = getCustomData(getDataOfBDParams, dataOfBD, excludeFields )

  writeBackend(customData)
  customData.tableStructure = customData.tableStructureClean
  writeFrontend(customData)
}

main({
  schema: crud.schema || 'public', 
  tableMaster: crud.tableMaster || 'users',
}, crud.excludeFields ?? [])
