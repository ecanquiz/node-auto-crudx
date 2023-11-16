import config from '@config/index'
import { singular, uCamelCase } from 'autocrudx-tools'
import type { ParamsAll, Rendering } from 'autocrudx-tools'

export default {
  masterController: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackBackend}/templates/controller`,
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Controller.php`,
    params
  }),

  masterModel: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackBackend}/templates/model`,
    outputPath: `Models`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.php`,
    params
  }),

  masterRoute: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackBackend}/templates/route`,
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableMaster))}.php`,
    params
  })  
}

