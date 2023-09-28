import { singular } from '@coreUtils/grammaticalNumber'
import { uCamelCase } from '@coreUtils/nomenclature'
import type { ParamsAll, Rendering } from '@coreTypes/utilsRendering'

export default {
  detailController: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/controllerDetail',
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}Controller.php`,
    params
  }),

  detailModel: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/modelDetail',
    outputPath: `Entities`,
    outputFile: `${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.php`,
    params
  }),

  detailRoute: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/routeDetail',
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.php`,
    params
  }),

  detailStoreRequest: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/storeDetailRequest',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}`,
    outputFile: `Store${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}Request.php`,
    params
  }),

  detailStoreService: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/storeDetailService',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}`,
    outputFile: `Store${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}Service.php`,
    params
  }),

  detailUpdateRequest: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/updateDetailRequest',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}`,
    outputFile: `Update${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}Request.php`,
    params
  }),

  detailUpdateService: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/updateDetailService',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}`,
    outputFile: `Update${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}Service.php`,
    params
  }),

  masterController: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/controller',
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Controller.php`,
    params
  }),

  masterModel: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/model',
    outputPath: `Entities`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.php`,
    params
  }),

  masterRequestStore: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/requestStore',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Store${uCamelCase(singular(params.tableMaster))}Request.php`,
    params
  }),

  masterRequestUpdate: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/requestUpdate',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Update${uCamelCase(singular(params.tableMaster))}Request.php`,
    params
  }),

  masterResource: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/resource',
    outputPath: `Http/Resources`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Resource.php`,
    params
  }),

  masterRoute: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/route',
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableMaster))}.php`,
    params
  }),

  masterServiceIndex: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/serviceIndex',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Index${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  }),

  masterServiceStore: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/serviceStore',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Store${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  }),

  masterServiceUpdate: (params: ParamsAll): Rendering => ({
    template: './src/stack/templates/laravel/serviceUpdate',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Update${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  })  
}
