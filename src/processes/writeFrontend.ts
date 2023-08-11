import * as vue from '@modules/renderings/vue'
import rendering from '@utils/rendering';
import { pathFrontend as output } from '@config/output'
import { buildFrontendRoutes } from '@config/buildRoutes'
import type { ParamsAll, tableDetailOfMasterCustomized } from '@customTypes/utilsRendering';

export default (paramsOmitOutput: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll = {...paramsOmitOutput, output}
  rendering(vue.datagrid(params), params)
  rendering(vue.services(params), params)
  rendering(vue.types(params), params)
  rendering(vue.useDatagrid(params), params)
  if (buildFrontendRoutes as unknown as boolean)
    rendering(vue.routes(params), params)
  if (!params.tableDetailOfMaster) {
    rendering(vue.createOrEditMaster(params), params)
    rendering(vue.formCreateOrEditMaster(params), params)
    rendering(vue.useCreateOrEditMaster(params), params)
  } else {
    rendering(vue.tabs(params), params)
    rendering(vue.tabMaster(params), params)
    rendering(vue.useTabMaster(params), params) // TODO
    rendering(vue.formMaster(params), params) // TODO
    rendering(vue.useFormMaster(params), params) // TODO
    params.tableDetailOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailCurrent: (table as unknown as tableDetailOfMasterCustomized)
      }
      rendering(vue.tabDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(vue.useTabDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(vue.servicesDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(vue.typesDetail(paramsWhitDetail), paramsWhitDetail)
    })    
  }
}
