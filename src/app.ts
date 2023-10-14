import 'module-alias/register';
import crud from '@config/crud'
import consoleLog from '@coreUtils/consoleLog'
import getDataOfBD from './core/processes/getDataOfBD'
import getCustomData from './core/processes/getCustomData'
import writeBackend from './stack/processes/laravel'
import writeFrontend from './stack/processes/vue'
import type { GetDataOfBDParams } from '@coreTypes/db'

const main = async (getDataOfBDParams: GetDataOfBDParams, excludeFields: string[]) => {
  const dataOfBD = await getDataOfBD(getDataOfBDParams)  
  const customData = getCustomData(getDataOfBDParams, dataOfBD, excludeFields )

  if (true) {
    writeBackend(customData)
    customData.tableStructure = customData.tableStructureClean
    writeFrontend(customData)
  } else {
    consoleLog.propertyLists({ dataOfBD: false, customData: true})
    // console.log(customData.tableDetailsOfMaster[1].tableForeignKeysAssoc)
  }
}

main({
  schema: crud.schema || 'public', 
  tableMaster: crud.tableMaster || 'users',
}, crud.excludeFields ?? [])
