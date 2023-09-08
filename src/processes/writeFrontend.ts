import vue from '@modules/renderings/vue'
import rendering from '@utils/rendering';
//import crud from '@config/crud'
import { pathFrontend as output } from '@config/output'
import { buildFrontendRoutes } from '@config/buildRoutes'
import type { ParamsAll, tableDetailOfMasterCustomized } from '@customTypes/utilsRendering';

export default (paramsOmitOutput: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll = {...paramsOmitOutput, output}
  if (buildFrontendRoutes as unknown as boolean) {
    rendering(vue.routes(params))
  }
  rendering(vue.datagrid(params))
  rendering(vue.useDatagrid(params))
  rendering(vue.services(params))
  if (params.tableDetailOfMaster.length===0){
    rendering(vue.createOrEditMaster(params))
    rendering(vue.formCreateOrEditMaster(params))
    rendering(vue.useCreateOrEditMaster(params))    
    rendering(vue.types(params))
  } else {
    rendering(vue.tabs(params))
    rendering(vue.tabMaster(params))
    rendering(vue.useTabMaster(params)) // TODO
    rendering(vue.formMaster(params)) // TODO
    rendering(vue.useFormMaster(params)) // TODO
    params.tableDetailOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailCurrent: (table as unknown as tableDetailOfMasterCustomized)
      }
      rendering(vue.formDetail(paramsWhitDetail))
      rendering(vue.tabDetail(paramsWhitDetail))
      rendering(vue.useTabDetail(paramsWhitDetail))
      rendering(vue.useFormDetail(paramsWhitDetail))
      rendering(vue.servicesDetail(paramsWhitDetail))
      rendering(vue.typesDetail(paramsWhitDetail))
      rendering(vue.tableDetail(paramsWhitDetail))
    })
  }
}
