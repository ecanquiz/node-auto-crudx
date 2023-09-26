import { singular } from '@utils/grammaticalNumber'
import { uCamelCase } from '@utils/nomenclature'
import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default {
  detailForm: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/formDetail',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Form${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.vue`,
    params
  }),

  detailServices: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/services/detail',
    outputPath: `services`,
    outputFile: `${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.ts`,
    params
  }),

  detailTab: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/tabDetail',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Tab${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.vue`,
    params
  }),

  detailTable: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/tableDetail',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Table${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.vue`,
    params
  }),

  detailTypes: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/types/detail',
    outputPath: `types/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.ts`,
    params
  }),

  detailUseForm: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useFormDetail',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useForm${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.ts`,
    params
  }),

  detailUseTab: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useTabDetail',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useTab${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.ts`,
    params
  }),

  masterCreateOrEdit: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/views/createOrEditMaster',
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'CreateOrEdit.vue',
    params
  }),

  masterDatagrid: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/views/index',
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'Index.vue',
    params
  }),

  masterFormCreateOrEdit: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/formCreateOrEditMaster',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'FormCreateOrEdit.vue',
    params
  }),

  masterForm: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/formMaster',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Form${uCamelCase(singular(params.tableMaster))}.vue`,
    params
  }),

  masterRoutes: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/routes/index',
    outputPath: `routes`,
    outputFile: `index${uCamelCase(singular(params.tableMaster))}.ts`,
    params
  }),

  masterServices: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/services/index',
    outputPath: `services`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.ts`,
    params
  }),

  masterTab: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/tabMaster',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Tab${uCamelCase(singular(params.tableMaster))}.vue`,
    params
  }),

  masterTypes: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/types/index',
    outputPath: `types/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `index.ts`,
    params
  }),

  masterUseCreateOrEdit: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useCreateOrEdit',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'useCreateOrEdit.ts',
    params
  }),

  masterUseDatagrid: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useIndex',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'useIndex.ts',
    params
  }),

  masterUseForm: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useFormMaster',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useForm${uCamelCase(singular(params.tableMaster))}.ts`,
    params
  }),

  masterUseTab: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useTabMaster',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useTab${uCamelCase(singular(params.tableMaster))}.ts`,
    params
  }),

  tabs: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/views/tabs',
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'Tabs.vue',
    params
  })
}
