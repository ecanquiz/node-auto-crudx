import fs from 'fs'
import ejs from 'ejs'
import { uCamelCase, camelCase } from '../../../utils/nomenclature';


export default () => {
  const tablaName = 'users'
  const domain = {
    tablaName,
    uCamelCase: uCamelCase(tablaName)
  };

  let template = fs.readFileSync('./templates/vue/views/index')

  let content = ejs.render(template.toString(), { domain });


  if (!fs.existsSync('./output/views')) {
    fs.mkdirSync('./output/views');
  }

  fs.writeFile(`./output/views/Index.vue`, content, err => {
    (err)
      ?  console.error(err)
        : console.log("file written successfully")
  });
}