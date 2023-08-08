import * as vue from '@modules/renderings/vue'
import { pathFrontend as output } from '@config/output'
import { buildFrontendRoutes } from '@config/buildRoutes'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure,
  tableDetailOfMaster,
  tableMasterForeignKeysAssoc
}: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll = {
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    tableDetailOfMaster,
    tableMasterForeignKeysAssoc,
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
  if (tableDetailOfMaster)
    vue.tabs(params)
  console.log(tableDetailOfMaster)
}
