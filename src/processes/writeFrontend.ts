import * as vue from '@modules/renderings/vue'
import { pathFrontend as output } from '@config/output'
import { buildFrontendRoutes } from '@config/buildRoutes'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  pathModule,
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure,
  tableDetailOfMaster
}: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll= {
    pathModule,
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
  vue.services(params)
  vue.types(params)
  vue.useCreateOrEditMaster(params)
  vue.useDatagrid(params)
  if (buildFrontendRoutes as unknown as boolean)
    vue.routes(params)
  //if (tableDetailOfMaster)
  //  vue.tabs(params)
}
