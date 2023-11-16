import config from '@config/index'
import { rendering } from 'autocrudx-tools'
import type {
  ParamsAll,
  tableDetailsOfMasterCustomized
} from 'autocrudx-tools';

export default async (
  paramsOmitOutput: Omit<ParamsAll, 'output'>
): Promise<void> => {
  const backend = (
    await import(`@stack/${config.crud.stackBackend}/renderings`)
  ).default
  const params: ParamsAll = {
    ...paramsOmitOutput,
    output: config.pathBackend,
    moduleName: config.moduleName,
    pathUser: config.pathUser
  }
  if (params.tableDetailsOfMaster.length!==0) {
    params.tableDetailsOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailsCurrent: (
          table as unknown as tableDetailsOfMasterCustomized
        )
      }
      rendering(backend.detailController(paramsWhitDetail))
      rendering(backend.detailModel(paramsWhitDetail))
      rendering(backend.detailRoute(paramsWhitDetail))
    })
  }
  rendering(backend.masterController(params))
  rendering(backend.masterModel(params))
  rendering(backend.masterRoute(params))
}
