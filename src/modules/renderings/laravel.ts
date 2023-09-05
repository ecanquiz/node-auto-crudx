import { singular } from '@utils/grammaticalNumber'
import { uCamelCase } from '@utils/nomenclature'
import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default {

  controller: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/controller',
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Controller.php`
  }),

  controllerDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/controllerDetail',
    outputPath: `Http/Controllers`,
    outputFile: `${params.tableDetailCurrent?.tableNameSingularUCamelCase}Controller.php`
  }),

  model: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/model',
    outputPath: `Entities`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.php`
  }),

  modelDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/modelDetail',
    outputPath: `Entities`,
    outputFile: `${params.tableDetailCurrent?.tableNameSingularUCamelCase}.php`
  }),

  requestStore: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/requestStore',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Store${uCamelCase(singular(params.tableMaster))}Request.php`
  }),

  requestUpdate: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/requestUpdate',
    outputPath: `Http/Requests/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Update${uCamelCase(singular(params.tableMaster))}Request.php`
  }),

  resource: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/resource',
    outputPath: `Http/Resources`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Resource.php`
  }),

  route: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/route',
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableMaster))}.php`
  }),

  routeDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/routeDetail',
    outputPath: `Routes`,
    outputFile: `api${params.tableDetailCurrent?.tableNameSingularUCamelCase}.php`
  }),

  serviceIndex: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceIndex',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Index${uCamelCase(singular(params.tableMaster))}Service.php`
  }),

  serviceStore: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceStore',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Store${uCamelCase(singular(params.tableMaster))}Service.php`
  }),

  serviceUpdate: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceUpdate',
    outputPath: `Http/Services/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Update${uCamelCase(singular(params.tableMaster))}Service.php`
  })
  
}
