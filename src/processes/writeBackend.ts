import laravel from '@modules/renderings/laravel'
import rendering from '@utils/rendering';
import { pathBackend as output } from '@config/output'
import { buildBackendRoutes } from '@config/buildRoutes'
import type { ParamsAll, tableDetailOfMasterCustomized } from '@customTypes/utilsRendering'

export default (paramsOmitOutput: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll = {...paramsOmitOutput, output}
  if (params.tableDetailOfMaster.length===0) {
    console.log('params.tableDetailOfMaster', params.tableDetailOfMaster)
  } else {
    params.tableDetailOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailCurrent: (table as unknown as tableDetailOfMasterCustomized)
      }
      rendering(laravel.controllerDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(laravel.modelDetail(paramsWhitDetail), paramsWhitDetail)
      rendering(laravel.routeDetail(paramsWhitDetail), paramsWhitDetail)
    })
  }
  rendering(laravel.controller(params), params)
  rendering(laravel.model(params), params)
  rendering(laravel.serviceIndex(params), params)
  rendering(laravel.serviceStore(params), params)
  rendering(laravel.serviceUpdate(params), params)
  rendering(laravel.resource(params), params)
  rendering(laravel.requestStore(params), params)
  rendering(laravel.requestUpdate(params), params)
  if (buildBackendRoutes as unknown as boolean)
    rendering(laravel.route(params), params)
}
