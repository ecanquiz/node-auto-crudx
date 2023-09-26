import laravel from '@modules/renderings/laravel'
import rendering from '@utils/rendering';
import { pathBackend as output } from '@config/output'
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
      rendering(laravel.controllerDetail(paramsWhitDetail))
      rendering(laravel.modelDetail(paramsWhitDetail))
      rendering(laravel.routeDetail(paramsWhitDetail))
      rendering(laravel.storeDetailRequest(paramsWhitDetail))
      rendering(laravel.storeDetailService(paramsWhitDetail))
      rendering(laravel.updateDetailRequest(paramsWhitDetail))
      rendering(laravel.updateDetailService(paramsWhitDetail))
    })
  }
  rendering(laravel.controller(params))
  rendering(laravel.model(params))
  rendering(laravel.serviceIndex(params))
  rendering(laravel.serviceStore(params))
  rendering(laravel.serviceUpdate(params))
  rendering(laravel.resource(params))
  rendering(laravel.requestStore(params))
  rendering(laravel.requestUpdate(params))
  rendering(laravel.route(params))
}
