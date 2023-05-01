import {
  controller
} from '@modules/renderings/laravel'
import { pathBackend as output } from '@config/output'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterSingular,
  tableMasterUCamelCase,
  tableStructureClean,
  tableDetailOfMaster
}: Omit<ParamsAll, 'output'>): void => {
  controller({
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean,
    output      
  })
}

