import { singular } from '@utils/grammaticalNumber'
import { uCamelCase } from '@utils/nomenclature'
import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default {
  detailController: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/controllerDetail',
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableDetailCurrent!.tableName))}Controller.php`,
    params
  }),

  detailModel: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/modelDetail',
    outputPath: `Entities`,
    outputFile: `${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.php`,
    params
  }),

  detailRoute: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/routeDetail',
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.php`,
    params
  }),

  detailStoreRequest: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/storeDetailRequest',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableDetailCurrent!.tableName))}`,
    outputFile: `Store${uCamelCase(singular(params.tableDetailCurrent!.tableName))}Request.php`,
    params
  }),

  detailStoreService: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/storeDetailService',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableDetailCurrent!.tableName))}`,
    outputFile: `Store${uCamelCase(singular(params.tableDetailCurrent!.tableName))}Service.php`,
    params
  }),

  detailUpdateRequest: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/updateDetailRequest',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableDetailCurrent!.tableName))}`,
    outputFile: `Update${uCamelCase(singular(params.tableDetailCurrent!.tableName))}Request.php`,
    params
  }),

  detailUpdateService: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/updateDetailService',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableDetailCurrent!.tableName))}`,
    outputFile: `Update${uCamelCase(singular(params.tableDetailCurrent!.tableName))}Service.php`,
    params
  }),

  masterController: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/controller',
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Controller.php`,
    params
  }),

  masterModel: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/model',
    outputPath: `Entities`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.php`,
    params
  }),

  masterRequestStore: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/requestStore',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Store${uCamelCase(singular(params.tableMaster))}Request.php`,
    params
  }),

  masterRequestUpdate: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/requestUpdate',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Update${uCamelCase(singular(params.tableMaster))}Request.php`,
    params
  }),

  masterResource: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/resource',
    outputPath: `Http/Resources`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Resource.php`,
    params
  }),

  masterRoute: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/route',
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableMaster))}.php`,
    params
  }),

  masterServiceIndex: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceIndex',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Index${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  }),

  masterServiceStore: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceStore',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Store${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  }),

  masterServiceUpdate: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceUpdate',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Update${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  })  
}
