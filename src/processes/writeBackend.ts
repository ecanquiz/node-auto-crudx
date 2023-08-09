import * as laravel from '@modules/renderings/laravel'
import rendering from '@utils/rendering';
import { pathBackend as output } from '@config/output'
import { buildBackendRoutes } from '@config/buildRoutes'
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (paramsOmitOutput: Omit<ParamsAll, 'output'>): void => {
  const params: ParamsAll = {...paramsOmitOutput, output}
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
