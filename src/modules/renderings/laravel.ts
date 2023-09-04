import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default {

  controller: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/controller',
    outputPath: `Http/Controllers`,
    outputFile: `${params.tableMasterSingularUCamelCase}Controller.php`
  }),

  controllerDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/controllerDetail',
    outputPath: `Http/Controllers`,
    outputFile: `${params.tableDetailCurrent?.tableNameSingularUCamelCase}Controller.php`
  }),

  model: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/model',
    outputPath: `Entities`,
    outputFile: `${params.tableMasterSingularUCamelCase}.php`
  }),

  modelDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/modelDetail',
    outputPath: `Entities`,
    outputFile: `${params.tableDetailCurrent?.tableNameSingularUCamelCase}.php`
  }),

  requestStore: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/requestStore',
    outputPath: `Http/Requests/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Store${params.tableMasterSingularUCamelCase}Request.php`
  }),

  requestUpdate: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/requestUpdate',
    outputPath: `Http/Requests/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Update${params.tableMasterSingularUCamelCase}Request.php`
  }),

  resource: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/resource',
    outputPath: `Http/Resources`,
    outputFile: `${params.tableMasterSingularUCamelCase}Resource.php`
  }),

  route: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/route',
    outputPath: `Routes`,
    outputFile: `api${params.tableMasterSingularUCamelCase}.php`
  }),

  routeDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/routeDetail',
    outputPath: `Routes`,
    outputFile: `api${params.tableDetailCurrent?.tableNameSingularUCamelCase}.php`
  }),

  serviceIndex: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceIndex',
    outputPath: `Http/Services/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Index${params.tableMasterSingularUCamelCase}Service.php`
  }),

  serviceStore: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceStore',
    outputPath: `Http/Services/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Store${params.tableMasterSingularUCamelCase}Service.php`
  }),

  serviceUpdate: (params: ParamsAll): Rendering => ({
    template: './src/templates/laravel/serviceUpdate',
    outputPath: `Http/Services/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Update${params.tableMasterSingularUCamelCase}Service.php`
  })
  
}
