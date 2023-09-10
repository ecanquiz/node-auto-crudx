import { singular } from '@utils/grammaticalNumber'
import { uCamelCase } from '@utils/nomenclature'
import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default {

  controller: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/controller',
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Controller.php`,
    params
  }),

  controllerDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/controllerDetail',
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableDetailCurrent!.tableName))}Controller.php`,
    params
  }),

  model: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/model',
    outputPath: `Entities`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.php`,
    params
  }),

  modelDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/modelDetail',
    outputPath: `Entities`,
    outputFile: `${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.php`,
    params
  }),

  requestStore: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/requestStore',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Store${uCamelCase(singular(params.tableMaster))}Request.php`,
    params
  }),

  requestUpdate: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/requestUpdate',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Update${uCamelCase(singular(params.tableMaster))}Request.php`,
    params
  }),

  resource: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/resource',
    outputPath: `Http/Resources`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Resource.php`,
    params
  }),

  route: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/route',
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableMaster))}.php`,
    params
  }),

  routeDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/routeDetail',
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.php`,
    params
  }),

  serviceIndex: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceIndex',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Index${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  }),

  serviceStore: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceStore',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Store${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  }),

  serviceUpdate: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceUpdate',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Update${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  }),

  storeDetailRequest: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/storeDetailRequest',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableDetailCurrent!.tableName))}`,
    outputFile: `Store${uCamelCase(singular(params.tableDetailCurrent!.tableName))}Request.php`,
    params
  }),

  storeDetailService: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/storeDetailService',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableDetailCurrent!.tableName))}`,
    outputFile: `Store${uCamelCase(singular(params.tableDetailCurrent!.tableName))}Service.php`,
    params
  }),

  updateDetailRequest: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/updateDetailRequest',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableDetailCurrent!.tableName))}`,
    outputFile: `Update${uCamelCase(singular(params.tableDetailCurrent!.tableName))}Request.php`,
    params
  }),

  updateDetailService: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/updateDetailService',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableDetailCurrent!.tableName))}`,
    outputFile: `Update${uCamelCase(singular(params.tableDetailCurrent!.tableName))}Service.php`,
    params
  })
  
}
