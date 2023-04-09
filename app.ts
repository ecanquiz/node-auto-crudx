import fs from 'fs'
import client from './db/connection'
import ejs from 'ejs';

client.connect()

const query = `SELECT * FROM users ORDER BY 1 LIMIT 1;`;

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    client.end();
});

let people = ['geddy', 'neil', 'alex'];
let content = ejs.render('this-is-a-string [ <%= people.join(", "); %> ] this-is-another-string', {people});

console.log(content);

fs.writeFile(`./docs/content.example`, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

