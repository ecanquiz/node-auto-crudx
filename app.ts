import fs from 'fs'
import ejs from 'ejs'
import loadData from './modules/loadData'

loadData('products', 'presentations')

let people = ['geddy', 'neil', 'alex'];
let content = ejs.render('this-is-a-string [ <%= people.join(", "); %> ] this-is-another-string', {people});

console.log(content);

fs.writeFile(`./docs/content.example`, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

