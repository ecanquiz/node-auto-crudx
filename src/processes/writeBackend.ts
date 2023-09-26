import laravel from '@modules/renderings/laravel'
import rendering from '@utils/rendering';
import { pathBackend as output } from '@config/output'
import type { ParamsAll, tableDetailsOfMasterCustomized } from '@customTypes/utilsRendering'

export default (paramsOmitOutput: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll = {...paramsOmitOutput, output}
  if (params.tableDetailsOfMaster.length===0) {
    console.log('params.tableDetailsOfMaster', params.tableDetailsOfMaster)
  } else {
    params.tableDetailsOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailsCurrent: (table as unknown as tableDetailsOfMasterCustomized)
      }
      rendering(laravel.detailController(paramsWhitDetail))
      rendering(laravel.detailModel(paramsWhitDetail))
      rendering(laravel.detailRoute(paramsWhitDetail))
      rendering(laravel.detailStoreRequest(paramsWhitDetail))
      rendering(laravel.detailStoreService(paramsWhitDetail))
      rendering(laravel.detailUpdateRequest(paramsWhitDetail))
      rendering(laravel.detailUpdateService(paramsWhitDetail))
    })
  }
  rendering(laravel.masterController(params))
  rendering(laravel.masterModel(params))
  rendering(laravel.masterServiceIndex(params))
  rendering(laravel.masterServiceStore(params))
  rendering(laravel.masterServiceUpdate(params))
  rendering(laravel.masterResource(params))
  rendering(laravel.masterRequestStore(params))
  rendering(laravel.masterRequestUpdate(params))
  rendering(laravel.masterRoute(params))
}
