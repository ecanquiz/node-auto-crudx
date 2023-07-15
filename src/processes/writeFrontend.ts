import * as vue from '@modules/renderings/vue'
import { pathFrontend as output } from '@config/output'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure,
  tableDetailOfMaster
}: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll= {
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    tableDetailOfMaster,
    output
  }
  vue.createOrEditMaster(params)
  vue.datagrid(params)
  vue.formCreateOrEditMaster(params)
  vue.routes(params)
  vue.services(params)
  vue.types(params)
  vue.useCreateOrEditMaster(params)
  vue.useDatagrid(params)
  if (tableDetailOfMaster)
    vue.tabs(params)
}
