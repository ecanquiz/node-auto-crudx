import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure,
  output
}: Omit<ParamsAll, 'tableDetailOfMaster'>): void => {
  rendering(
    {
      template: './src/templates/vue/services/index',
      outputPath: `src/modules/${tableMasterSingularUCamelCase}/services`,
      outputFile: 'index.ts'
    }, {
      tableMaster,
      tableMasterUCamelCase,
      tableMasterSingular,
      tableMasterSingularUCamelCase,
    },
    output
  )
}
