import * as vue from '@modules/renderings/vue'
import rendering from '@utils/rendering';
import crud from '@config/crud'
import { pathFrontend as output } from '@config/output'
import { buildFrontendRoutes } from '@config/buildRoutes'
import type { ParamsAll, tableDetailOfMasterCustomized } from '@customTypes/utilsRendering';

export default (paramsOmitOutput: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll = {...paramsOmitOutput, output}
  rendering(vue.datagrid(params), params)
  rendering(vue.useDatagrid(params), params)
  if (buildFrontendRoutes as unknown as boolean) {
    rendering(vue.routes(params), params)
  }
  //console.log(params.tableDetailOfMaster)
  //console.log(params.tableDetailOfMaster.length)
  //console.log('crud.tableMasterIsHelper', crud.tableMasterIsHelper)
  //console.log('111', params.tableDetailOfMaster.length===0 || crud.tableMasterIsHelper)


  /*if (params.tableDetailOfMaster.length===0){
    console.log("params.tableDetailOfMaster.length === 0", params.tableDetailOfMaster.length)
  } else {
    console.log("params.tableDetailOfMaster.length !== 0", params.tableDetailOfMaster.length)
  }*/

  if (crud.tableMasterIsHelper || params.tableDetailOfMaster.length===0){
    console.log("crud.tableMasterIsHelper", crud.tableMasterIsHelper)
    console.log("params.tableDetailOfMaster.length", params.tableDetailOfMaster.length)
  } else {
    console.log("!crud.tableMasterIsHelper", crud.tableMasterIsHelper)
  }

  /*if (params.tableDetailOfMaster.length===0 || crud.tableMasterIsHelper) {
    console.log('paso')
    rendering(vue.createOrEditMaster(params), params)
    rendering(vue.formCreateOrEditMaster(params), params)
    rendering(vue.useCreateOrEditMaster(params), params)
    rendering(vue.services(params), params)
    rendering(vue.types(params), params)
  } else if (params.tableDetailOfMaster.length>0 && !crud.tableMasterIsHelper) {
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
      rendering(vue.formDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(vue.tabDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(vue.useTabDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(vue.useFormDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(vue.servicesDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(vue.typesDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(vue.tableDetail(paramsWhitDetail), paramsWhitDetail)
    })  
  }*/
}
