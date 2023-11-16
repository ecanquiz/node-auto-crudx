import config from '@config/index'
import { singular, uCamelCase } from 'autocrudx-tools'
import type { ParamsAll, Rendering } from 'autocrudx-tools'

export default {
  masterDatagrid: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackFrontend}/templates/masterDatagrid`,
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'Index.vue',
    params
  }),

  masterCreateOrEdit: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackFrontend}/templates/masterCreateOrEdit`,
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'CreateOrEdit.vue',
    params
  }),

  masterForm: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackFrontend}/templates/masterForm`,
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Form${uCamelCase(singular(params.tableMaster))}.vue`,
    params
  })

}

