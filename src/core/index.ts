import consoleLog     from '@coreUtils/consoleLog'
import rendering      from '@coreUtils/rendering';
import fn             from '@coreUtils/fn'
import { singular }   from '@coreUtils/grammaticalNumber'
import { uCamelCase } from '@coreUtils/nomenclature'
import getCustomData  from '@coreProcesses/getCustomData'
import getDataOfBD    from '@coreProcesses/getDataOfBD'
import db             from '@coreModules/db';

import type {
    GetDataOfBDParams,
    GetDataOfBDReturn,
    DataOfBD,
    fieldStructure,
    TableDetailsOfMaster
} from '@coreTypes/db'

import type {
    ParamsAll,
    Rendering,
    tableDetailsOfMasterCustomized
} from '@coreTypes/rendering'

export {
    consoleLog,
    db,
    fn,
    getCustomData,
    getDataOfBD,
    rendering,
    singular,
    uCamelCase,

    // Types:
    GetDataOfBDParams,
    GetDataOfBDReturn,
    DataOfBD,
    fieldStructure,
    TableDetailsOfMaster,
    ParamsAll,
    Rendering,
    tableDetailsOfMasterCustomized
}
