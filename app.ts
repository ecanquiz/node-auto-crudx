// import demo from './modules/renderings/demo'
import getDataOfBD from './processes/getDataOfBD'
import writeFrontend from './processes/writeFrontend'
import { uCamelCase } from './utils/nomenclature';
import { singular } from './utils/grammaticalNumber'
import type { GetDataOfBDParams, fieldStructure } from './types'

const main = async (getDataOfBDParams: GetDataOfBDParams, excludeFields: string[]) => {
  /*
    // demo()
    const dataOfBD = await getDataOfBD(payload)
    console.log(dataOfBD)
  */
  const {
    tableStructure 
  } = await getDataOfBD(getDataOfBDParams) // console.log(dataOfBD)*/
  
  writeFrontend({
    tableMaster: getDataOfBDParams.tableMaster,
    tableMasterSingular: singular(getDataOfBDParams.tableMaster),
    tableMasterUCamelCase: uCamelCase(getDataOfBDParams.tableMaster),
    tableStructureClean: tableStructure.filter(
      field => !(excludeFields.includes((field as unknown as fieldStructure).column_name))
    )
  })  
}

main({
  schema: 'public',
  tableMaster: 'products',
  tableDetail: 'presentations'
}, [
  'updated_at',
  'created_at',
  'editing',
  'user_edit_id',
  'user_update_id',
  'user_insert_id'
])
