import getDataOfBD from './processes/getDataOfBD'
import rendering from './processes/rendering'
import codeStandard from './processes/codeStandard'

getDataOfBD().then(r=>console.log(r))
rendering()
codeStandard()
