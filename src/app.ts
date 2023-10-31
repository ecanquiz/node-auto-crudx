import 'module-alias/register';
import config from '@config/index'
import { main } from 'autocrudx-tools'

main( 
  config,
  dataJSON => console.log(dataJSON)
  // for consoleLogCustom of dataJSON
)
