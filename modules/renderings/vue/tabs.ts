import fs from 'fs'
import ejs from 'ejs'
import type { TableDetailOfMaster } from '../../../types'

type DataGridParamas = {
  tableMaster: string;
  tableMasterSingular: string
  tableMasterUCamelCase: string;
  tableStructureClean: any[][];
  tableDetailOfMaster: any[][];
}

export default (
    { tableMaster, tableMasterSingular, tableMasterUCamelCase, tableStructureClean, tableDetailOfMaster }: DataGridParamas
  ): void => {

  let template = fs.readFileSync('./templates/vue/views/tabs')

  let content = ejs.render(template.toString(), {
    tableMaster,
    tableMasterSingular,
    tableMasterUCamelCase,
    tableStructureClean,
    tableDetailOfMaster: tableDetailOfMaster.map( r => (r as unknown as TableDetailOfMaster).table_name)
  });

  if (!fs.existsSync('./output')) {
    fs.mkdirSync('./output');
    if (!fs.existsSync('./output/views')) {
      fs.mkdirSync('./output/views');
    }
  }

  fs.writeFile(`./output/views/Tabs.vue`, content, err => {
    (err)
      ?  console.error(err)
        : console.log("file written successfully")
  });
}