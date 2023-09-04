import type { ParamsAll, Rendering } from '@customTypes/utilsRendering'

export default {

  createOrEditMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/views/createOrEditMaster',
    outputPath: `views/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'CreateOrEdit.vue'
  }),

  datagrid: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/views/index',
    outputPath: `views/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'Index.vue'
  }),

  formCreateOrEditMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/formCreateOrEditMaster',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'FormCreateOrEdit.vue'
  }),

  formDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/formDetail',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Form${params.tableDetailCurrent?.tableNameSingularUCamelCase}.vue`  
  }),

  formMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/formMaster',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Form${params.tableMasterSingularUCamelCase}.vue`
  }),

  routes: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/routes/index',
    outputPath: `routes`,
    outputFile: `index${params.tableMasterSingularUCamelCase}.ts`
  }),

  services: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/services/index',
    outputPath: `services`,
    outputFile: `${params.tableMasterSingularUCamelCase}.ts`
  }),

  servicesDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/services/detail',
    outputPath: `services`,
    outputFile: `${params.tableDetailCurrent?.tableNameSingularUCamelCase}.ts`
  }),

  tabDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/tabDetail',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Tab${params.tableDetailCurrent!.tableNameSingularUCamelCase}.vue`
  }),

  tableDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/tableDetail',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Table${params.tableDetailCurrent?.tableNameSingularUCamelCase}.vue`
  }),

  tabMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/components/tabMaster',
    outputPath: `components/${params.tableMasterSingularUCamelCase}`,
    outputFile: `Tab${params.tableMasterSingularUCamelCase}.vue`
  }),

  tabs: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/views/tabs',
    outputPath: `views/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'Tabs.vue'
  }),

  types: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/types/index',
    outputPath: `types/${params.tableMasterSingularUCamelCase}`,
    outputFile: `index.ts`
  }),

  typesDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/types/detail',
    outputPath: `types/${params.tableMasterSingularUCamelCase}`,
    outputFile: `${params.tableDetailCurrent!.tableNameSingularUCamelCase}.ts`
  }),

  useCreateOrEditMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useCreateOrEdit',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'useCreateOrEdit.ts'
  }),

  useDatagrid: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useIndex',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: 'useIndex.ts'
  }),

  useFormDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useFormDetail',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: `useForm${params.tableDetailCurrent!.tableNameSingularUCamelCase}.ts`
  }),

  useFormMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useFormMaster',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: `useForm${params.tableMasterSingularUCamelCase}.ts`
  }),

  useTabMaster: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useTabMaster',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: `useTab${params.tableMasterSingularUCamelCase}.ts`
  }),

  useTabDetail: (params: ParamsAll): Rendering => ({
    template: './src/templates/vue/composables/useTabDetail',
    outputPath: `composables/${params.tableMasterSingularUCamelCase}`,
    outputFile: `useTab${params.tableDetailCurrent!.tableNameSingularUCamelCase}.ts`
  })

}
