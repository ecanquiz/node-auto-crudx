import 'module-alias/register';
import config from '@config/index'
import { main } from 'autocrux-utils'
main(
  config,
  {
    schema: config.crud.schema || 'public', 
    tableMaster: config.crud.tableMaster || 'users',
  },
  config.crud.excludeFields ?? [],
  (dataJSON) => { // for consoleLogCustom of dataJSON
    console.log(dataJSON) 
  }
)
