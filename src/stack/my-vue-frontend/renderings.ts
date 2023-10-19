import { crud } from '@config/index'
import { singular, uCamelCase } from '@core/index'
import type { ParamsAll, Rendering } from '@core/index'

export default {
  detailForm: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/components/formDetail`,
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Form${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.vue`,
    params
  }),

  detailServices: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/services/detail`,
    outputPath: `services`,
    outputFile: `${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.ts`,
    params
  }),

  detailTab: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/components/tabDetail`,
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Tab${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.vue`,
    params
  }),

  detailTable: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/components/tableDetail`,
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Table${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.vue`,
    params
  }),

  detailTypes: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/types/detail`,
    outputPath: `types/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.ts`,
    params
  }),

  detailUseForm: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/composables/useFormDetail`,
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useForm${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.ts`,
    params
  }),

  detailUseTab: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/composables/useTabDetail`,
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useTab${uCamelCase(singular(params.tableDetailsCurrent!.tableName))}.ts`,
    params
  }),

  masterCreateOrEdit: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/views/createOrEditMaster`,
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'CreateOrEdit.vue',
    params
  }),

  masterDatagrid: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/views/index`,
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'Index.vue',
    params
  }),

  masterFormCreateOrEdit: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/components/formCreateOrEditMaster`,
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'FormCreateOrEdit.vue',
    params
  }),

  masterForm: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/components/formMaster`,
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Form${uCamelCase(singular(params.tableMaster))}.vue`,
    params
  }),

  masterRoutes: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/routes/index`,
    outputPath: `routes`,
    outputFile: `index${uCamelCase(singular(params.tableMaster))}.ts`,
    params
  }),

  masterServices: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/services/index`,
    outputPath: `services`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.ts`,
    params
  }),

  masterTab: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/components/tabMaster`,
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Tab${uCamelCase(singular(params.tableMaster))}.vue`,
    params
  }),

  masterTypes: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/types/index`,
    outputPath: `types/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `index.ts`,
    params
  }),

  masterUseCreateOrEdit: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/composables/useCreateOrEdit`,
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'useCreateOrEdit.ts',
    params
  }),

  masterUseDatagrid: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/composables/useIndex`,
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'useIndex.ts',
    params
  }),

  masterUseForm: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/composables/useFormMaster`,
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useForm${uCamelCase(singular(params.tableMaster))}.ts`,
    params
  }),

  masterUseTab: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/composables/useTabMaster`,
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useTab${uCamelCase(singular(params.tableMaster))}.ts`,
    params
  }),

  tabs: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${crud.stackFrontend}/templates/views/tabs`,
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'Tabs.vue',
    params
  })
}
