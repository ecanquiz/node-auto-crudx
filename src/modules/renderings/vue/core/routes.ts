import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  //tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  //tableStructure,
  output
}: Omit<ParamsAll, 'tableDetailOfMaster'>): void => {
  rendering(
    {
      template: './src/templates/vue/routes/index',
      outputPath: `routes`,
      outputFile: `index${tableMasterSingularUCamelCase}.ts`
    }, {
      tableMaster,
      tableMasterSingular,
      tableMasterSingularUCamelCase,
    },
    output
  )
}
