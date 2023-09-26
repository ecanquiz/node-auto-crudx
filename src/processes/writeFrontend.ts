import vue from '@modules/renderings/vue'
import rendering from '@utils/rendering';
import { pathFrontend as output } from '@config/output'
import type { ParamsAll, tableDetailOfMasterCustomized } from '@customTypes/utilsRendering';

export default (paramsOmitOutput: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll = {...paramsOmitOutput, output}
  if (params.tableDetailOfMaster.length===0){
    rendering(vue.masterCreateOrEdit(params))
    rendering(vue.masterFormCreateOrEdit(params))
    rendering(vue.masterUseCreateOrEdit(params))   
  } else {
    rendering(vue.tabs(params))
    rendering(vue.masterTab(params))
    rendering(vue.masterUseTab(params)) // TODO
    rendering(vue.masterForm(params)) // TODO
    rendering(vue.masterUseForm(params)) // TODO
    params.tableDetailOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailCurrent: (table as unknown as tableDetailOfMasterCustomized)
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
