import { singular, uCamelCase } from '@core/index'
import type { ParamsAll, Rendering } from '@core/index'

export default {
  detailController: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/controllerDetail',
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}Controller.php`,
    params
  }),

  detailModel: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/modelDetail',
    outputPath: `Entities`,
    outputFile: `${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.php`,
    params
  }),

  detailRoute: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/routeDetail',
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.php`,
    params
  }),

  detailStoreRequest: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/storeDetailRequest',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}`,
    outputFile: `Store${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}Request.php`,
    params
  }),

  detailStoreService: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/storeDetailService',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}`,
    outputFile: `Store${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}Service.php`,
    params
  }),

  detailUpdateRequest: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/updateDetailRequest',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}`,
    outputFile: `Update${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}Request.php`,
    params
  }),

  detailUpdateService: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/updateDetailService',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}`,
    outputFile: `Update${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}Service.php`,
    params
  }),

  masterController: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/controller',
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Controller.php`,
    params
  }),

  masterModel: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/model',
    outputPath: `Entities`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.php`,
    params
  }),

  masterRequestStore: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/requestStore',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Store${uCamelCase(singular(params.tableMaster))}Request.php`,
    params
  }),

  masterRequestUpdate: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/requestUpdate',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Update${uCamelCase(singular(params.tableMaster))}Request.php`,
    params
  }),

  masterResource: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/resource',
    outputPath: `Http/Resources`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Resource.php`,
    params
  }),

  masterRoute: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/route',
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableMaster))}.php`,
    params
  }),

  masterServiceIndex: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/serviceIndex',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Index${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  }),

  masterServiceStore: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/serviceStore',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Store${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  }),

  masterServiceUpdate: (params: ParamsAll): Rendering => ({
    template: './src/stack/backend/templates/serviceUpdate',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Update${uCamelCase(singular(params.tableMaster))}Service.php`,
    params
  })  
}
