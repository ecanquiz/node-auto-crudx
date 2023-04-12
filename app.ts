import fs from 'fs'
import ejs from 'ejs'
import { uCamelCase, camelCase } from './utils/nomenclature';
import {plural} from './utils/plural'
import {singular} from './utils/singular'
import getDataOfBD from './processes/getDataOfBD'

getDataOfBD().then(r=>console.log(r))

let people = ['geddy', 'neil', 'alex'];
let content = ejs.render('this-is-a-string [ <%= people.join(", "); %> ] this-is-another-string', {people});

console.log(content);

fs.writeFile(`../../tests/content.example`, content, err => {
  (err)
    ?  console.error(err)
      : console.log("file written successfully")
});

const str = 'we_have_learned_something_new_today';
console.log(uCamelCase(str))
console.log(camelCase(str))
console.log(plural('foot'))
console.log(singular('men'))
