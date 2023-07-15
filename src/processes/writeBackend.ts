import * as laravel from '@modules/renderings/laravel'
import { pathBackend as output } from '@config/output'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure
}: Omit<ParamsAll, 'output'>): void => {
  const params: Omit<ParamsAll, 'tableDetailOfMaster'>= {
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
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
  laravel.route(params)
}

