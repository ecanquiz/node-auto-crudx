import { singular } from '@utils/grammaticalNumber'
import { uCamelCase } from '@utils/nomenclature'
import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default {

  createOrEditMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/views/createOrEditMaster',
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'CreateOrEdit.vue'
  }),

  datagrid: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/views/index',
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'Index.vue'
  }),

  formCreateOrEditMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/formCreateOrEditMaster',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'FormCreateOrEdit.vue'
  }),

  formDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/formDetail',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Form${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.vue`  
  }),

  formMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/formMaster',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Form${uCamelCase(singular(params.tableMaster))}.vue`
  }),

  routes: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/routes/index',
    outputPath: `routes`,
    outputFile: `index${uCamelCase(singular(params.tableMaster))}.ts`
  }),

  services: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/services/index',
    outputPath: `services`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.ts`
  }),

  servicesDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/services/detail',
    outputPath: `services`,
    outputFile: `${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.ts`
  }),

  tabDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/tabDetail',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Tab${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.vue`
  }),

  tableDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/tableDetail',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Table${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.vue`
  }),

  tabMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/tabMaster',
    outputPath: `components/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `Tab${uCamelCase(singular(params.tableMaster))}.vue`
  }),

  tabs: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/views/tabs',
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'Tabs.vue'
  }),

  types: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/types/index',
    outputPath: `types/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `index.ts`
  }),

  typesDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/types/detail',
    outputPath: `types/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.ts`
  }),

  useCreateOrEditMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useCreateOrEdit',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'useCreateOrEdit.ts'
  }),

  useDatagrid: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useIndex',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'useIndex.ts'
  }),

  useFormDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useFormDetail',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useForm${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.ts`
  }),

  useFormMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useFormMaster',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useForm${uCamelCase(singular(params.tableMaster))}.ts`
  }),

  useTabMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useTabMaster',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useTab${uCamelCase(singular(params.tableMaster))}.ts`
  }),

  useTabDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useTabDetail',
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `useTab${uCamelCase(singular(params.tableDetailCurrent!.tableName))}.ts`
  })

}
