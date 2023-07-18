import * as laravel from '@modules/renderings/laravel'
import { pathBackend as output } from '@config/output'
import { buildBackendRoutes } from '@config/buildRoutes'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure,
  tableDetailOfMaster,
  tableMasterForeignKeysAssoc
}: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll= {
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    tableDetailOfMaster,
    tableMasterForeignKeysAssoc,
    output
  }
  laravel.controller(params)
  laravel.model(params)
  laravel.serviceIndex(params)
  laravel.serviceStore(params)
  laravel.serviceUpdate(params)
  laravel.resource(params)
  laravel.requestStore(params)
  laravel.requestUpdate(params)
  if (buildBackendRoutes as unknown as boolean)
    laravel.route(params)
}

