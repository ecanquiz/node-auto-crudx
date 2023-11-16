import config from '@config/index'
import { rendering } from 'autocrudx-tools'
import type {
  ParamsAll,
  tableDetailsOfMasterCustomized
} from 'autocrudx-tools';

export default async (
  paramsOmitOutput: Omit<ParamsAll, 'output'>
): Promise<void> => {
  const frontend = (
    await import(`@stack/${config.crud.stackFrontend}/renderings`)
  ).default
  const params: ParamsAll = {
    ...paramsOmitOutput,
    output: config.pathFrontend,
    moduleName: config.moduleName,
    pathUser: config.pathUser
  }
  if (params.tableDetailsOfMaster.length!==0){
    rendering(frontend.tabs(params))
    rendering(frontend.masterTab(params))
    rendering(frontend.masterUseTab(params))
    params.tableDetailsOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailsCurrent: (
          table as unknown as tableDetailsOfMasterCustomized
        )
      }     
      rendering(frontend.detailTab(paramsWhitDetail))
      rendering(frontend.detailUseTab(paramsWhitDetail))      
      rendering(frontend.detailServices(paramsWhitDetail))
      rendering(frontend.detailTypes(paramsWhitDetail))      
    })
  } 
  // rendering(frontend.masterRoutes(params))
  rendering(frontend.masterDatagrid(params))
  rendering(frontend.masterCreateOrEdit(params))
  rendering(frontend.masterForm(params))
  
  
  // rendering(frontend.masterUseDatagrid(params))
  // rendering(frontend.masterServices(params))
  // rendering(frontend.masterTypes(params))
}
