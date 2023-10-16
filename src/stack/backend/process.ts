import { pathBackend as output } from '@config/index'
import { rendering } from '@core/index'
import backend from '@stack/backend/renderings';
import type { ParamsAll, tableDetailsOfMasterCustomized } from '@core/index'

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
      rendering(backend.detailController(paramsWhitDetail))
      rendering(backend.detailModel(paramsWhitDetail))
      rendering(backend.detailRoute(paramsWhitDetail))
      rendering(backend.detailStoreRequest(paramsWhitDetail))
      rendering(backend.detailStoreService(paramsWhitDetail))
      rendering(backend.detailUpdateRequest(paramsWhitDetail))
      rendering(backend.detailUpdateService(paramsWhitDetail))
    })
  }
  rendering(backend.masterController(params))
  rendering(backend.masterModel(params))
  rendering(backend.masterServiceIndex(params))
  rendering(backend.masterServiceStore(params))
  rendering(backend.masterServiceUpdate(params))
  rendering(backend.masterResource(params))
  rendering(backend.masterRequestStore(params))
  rendering(backend.masterRequestUpdate(params))
  rendering(backend.masterRoute(params))
}
