import fs from 'fs'
import ejs from 'ejs'

export default () => {
  let people = ['geddy', 'neil', 'alex'];
  let content = ejs.render('this-is-a-string [ <%= people.join(", "); %> ] this-is-another-string', {people});

  console.log(content);

  if (!fs.existsSync('./output')) {
    fs.mkdirSync('./output');
  }

  fs.writeFile(`./output/content.example`, content, err => {
    (err)
      ?  console.error(err)
        : console.log("file written successfully")
  });
}