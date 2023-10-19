import { crud } from '@config/index'
import { consoleLog, getCustomData, getDataOfBD } from '@core/index'
import type { GetDataOfBDParams } from '@core/index'

export default async (
    getDataOfBDParams: GetDataOfBDParams,
    excludeFields: string[],
    consoleLogCustom:(dataJSON: any) => void
): Promise<void> => {
    const dataOfBD = await getDataOfBD(getDataOfBDParams)  
    const customData = getCustomData(getDataOfBDParams, dataOfBD, excludeFields)  
    if (crud.generate) {
        const backendProcess = (await import(`@stack/${crud.stackBackend}/process`)).default
        const frontendProcess = (await import(`@stack/${crud.stackFrontend}/process`)).default
        backendProcess(customData)
        customData.tableStructure = customData.tableStructureClean
        frontendProcess(customData)
    } else {
        consoleLog.propertyLists({ dataOfBD: false, customData: true})
        consoleLogCustom(customData)
    }
}

