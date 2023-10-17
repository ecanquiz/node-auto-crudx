import { crud } from '@config/index'
import { consoleLog, getCustomData, getDataOfBD } from '@core/index'
import backendProcess from '@stack/backend/process'
import frontendProcess from '@stack/frontend/process'
import type { GetDataOfBDParams } from '@core/index'

export default async (
    getDataOfBDParams: GetDataOfBDParams,
    excludeFields: string[],
    consoleLogCustom:(dataJSON: any) => void
): Promise<void> => {
    const dataOfBD = await getDataOfBD(getDataOfBDParams)  
    const customData = getCustomData(getDataOfBDParams, dataOfBD, excludeFields)  
    if (crud.generate) {
        backendProcess(customData)
        customData.tableStructure = customData.tableStructureClean
        frontendProcess(customData)
    } else {
        consoleLog.propertyLists({ dataOfBD: false, customData: true})
        consoleLogCustom(customData)
    }
}