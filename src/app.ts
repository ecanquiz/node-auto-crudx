import 'module-alias/register';
import { crud } from '@config/index'
import { main } from '@core/index'

main({
    schema: crud.schema || 'public', 
    tableMaster: crud.tableMaster || 'users',
  },
  crud.excludeFields ?? [],
  (dataJSON) => { // for consoleLogCustom of dataJSON
    console.log(dataJSON) 
  }
)
