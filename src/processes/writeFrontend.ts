import * as vue from '@modules/renderings/vue'
import { pathFrontend as output } from '@config/output'
import { buildFrontendRoutes } from '@config/buildRoutes'
import type { ParamsAll, tableDetailOfMasterCustomized } from '@customTypes/utilsRendering';

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
  vue.datagrid(params)
  vue.services(params)
  vue.types(params)
  vue.useCreateOrEditMaster(params)
  vue.useDatagrid(params)
  if (buildFrontendRoutes as unknown as boolean)
    vue.routes(params)
  if (tableDetailOfMaster) {
    vue.tabs(params)
    vue.tabMaster(params)
    tableDetailOfMaster.forEach(function(table){
      vue.tabDetail({
        ...params,
        tableDetailCurrent: (table as unknown as tableDetailOfMasterCustomized)
      })
    })
  } else {
    vue.createOrEditMaster(params)
    vue.formCreateOrEditMaster(params)
  }
}
