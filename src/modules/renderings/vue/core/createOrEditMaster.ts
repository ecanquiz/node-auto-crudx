import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/vue/views/createOrEditMaster',
      outputPath: `views/${params.tableMasterSingularUCamelCase}`,
      outputFile: 'CreateOrEdit.vue'
    },
    params
  )
}
