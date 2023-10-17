import 'module-alias/register';
import { crud } from './config'
import { consoleLog, getCustomData, getDataOfBD } from './core'
import backendProcess from '@stack/backend/process'
import frontendProcess from '@stack/frontend/process'
import type { GetDataOfBDParams } from './core'

const main = async (getDataOfBDParams: GetDataOfBDParams, excludeFields: string[]) => {
  const dataOfBD = await getDataOfBD(getDataOfBDParams)  
  const customData = getCustomData(getDataOfBDParams, dataOfBD, excludeFields )

  if (crud.generate) {
    backendProcess(customData)
    customData.tableStructure = customData.tableStructureClean
    frontendProcess(customData)
  } else {
    consoleLog.propertyLists({ dataOfBD: false, customData: true})
    // console.log(customData.tableDetailsOfMaster[1].tableForeignKeysAssoc)
  }
}

main({
  schema: crud.schema || 'public', 
  tableMaster: crud.tableMaster || 'users',
}, crud.excludeFields ?? [])
