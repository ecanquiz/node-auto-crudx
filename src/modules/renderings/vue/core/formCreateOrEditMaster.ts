import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/components/formCreateOrEditMaster',
      outputPath: `components/${params.tableMasterSingularUCamelCase}`,
      outputFile: 'FormCreateOrEdit.vue'
    },
    params
  )
}
