import vue from '@stackRenderings/vue';
import rendering from '@coreUtils/rendering';
import { pathFrontend as output } from '@config/output'
import type { ParamsAll, tableDetailsOfMasterCustomized } from '@coreTypes/rendering';

export default (paramsOmitOutput: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll = {...paramsOmitOutput, output}
  if (params.tableDetailsOfMaster.length===0){
    rendering(vue.masterCreateOrEdit(params))
    rendering(vue.masterFormCreateOrEdit(params))
    rendering(vue.masterUseCreateOrEdit(params))   
  } else {
    rendering(vue.tabs(params))
    rendering(vue.masterTab(params))
    rendering(vue.masterUseTab(params)) // TODO
    rendering(vue.masterForm(params)) // TODO
    rendering(vue.masterUseForm(params)) // TODO
    params.tableDetailsOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailsCurrent: (table as unknown as tableDetailsOfMasterCustomized)
      }
      rendering(vue.detailForm(paramsWhitDetail))
      rendering(vue.detailTab(paramsWhitDetail))
      rendering(vue.detailUseTab(paramsWhitDetail))
      rendering(vue.detailUseForm(paramsWhitDetail))
      rendering(vue.detailServices(paramsWhitDetail))
      rendering(vue.detailTypes(paramsWhitDetail))
      rendering(vue.detailTable(paramsWhitDetail))
    })
  }
  rendering(vue.masterRoutes(params))
  rendering(vue.masterDatagrid(params))
  rendering(vue.masterUseDatagrid(params))
  rendering(vue.masterServices(params))
  rendering(vue.masterTypes(params))
}
