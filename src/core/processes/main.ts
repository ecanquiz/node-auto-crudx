import { consoleLog, getCustomData, getDataOfBD } from '@core/index'
import type { GetDataOfBDParams } from '@core/index'
import type { Config } from '@core/types/config'

export default async (
    config: Config,
    getDataOfBDParams: GetDataOfBDParams,
    excludeFields: string[],
    consoleLogCustom:(dataJSON: any) => void
): Promise<void> => {
    const dataOfBD = await getDataOfBD(config.dbConfig, getDataOfBDParams)  
    const customData = getCustomData(config.crud, getDataOfBDParams, dataOfBD, excludeFields)  
    if (config.crud.generate) {
        const backendProcess = (await import(`@stack/${config.crud.stackBackend}/process`)).default
        const frontendProcess = (await import(`@stack/${config.crud.stackFrontend}/process`)).default
        backendProcess(customData)
        customData.tableStructure = customData.tableStructureClean
        frontendProcess(customData)
    } else {
        consoleLog.propertyLists({ dataOfBD: false, customData: true})
        consoleLogCustom(customData)
    }
}

