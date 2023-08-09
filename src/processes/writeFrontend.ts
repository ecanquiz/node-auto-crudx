import * as vue from '@modules/renderings/vue'
import { pathFrontend as output } from '@config/output'
import { buildFrontendRoutes } from '@config/buildRoutes'
import type { ParamsAll, tableDetailOfMasterCustomized } from '@customTypes/utilsRendering';

export default (paramsOmitOutput: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll = {...paramsOmitOutput, output}
  vue.datagrid(params)
  vue.services(params)
  vue.types(params)
  vue.useDatagrid(params)
  if (buildFrontendRoutes as unknown as boolean)
    vue.routes(params)
  if (!params.tableDetailOfMaster) {
    vue.createOrEditMaster(params)
    vue.formCreateOrEditMaster(params)
    vue.useCreateOrEditMaster(params)
  } else {
    vue.tabs(params)
    vue.tabMaster(params)
    vue.useTabMaster(params) // TODO
    params.tableDetailOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailCurrent: (table as unknown as tableDetailOfMasterCustomized)
      }
      vue.tabDetail(paramsWhitDetail)
      vue.useTabDetail(paramsWhitDetail)
      vue.servicesDetail(paramsWhitDetail)
      vue.typesDetail(paramsWhitDetail)
    })    
  }
}
