import fs from 'fs'
import ejs from 'ejs'

type DataGridParamas = {
  tableMaster: string;
  tableMasterSingular: string
  tableMasterUCamelCase: string;
  tableStructureClean: any[][];
}

export default (
    { tableMaster, tableMasterSingular, tableMasterUCamelCase, tableStructureClean }: DataGridParamas
  ): void => {

  let template = fs.readFileSync('./templates/vue/views/index')

  let content = ejs.render(template.toString(), {
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean,
    arr: ['aaa', 'bbb', 'ccc']    
  });

  if (!fs.existsSync('./output')) {
    fs.mkdirSync('./output');
    if (!fs.existsSync('./output/views')) {
      fs.mkdirSync('./output/views');
    }
  }

  fs.writeFile(`./output/views/Index.vue`, content, err => {
    (err)
      ?  console.error(err)
        : console.log("file written successfully")
  });
}