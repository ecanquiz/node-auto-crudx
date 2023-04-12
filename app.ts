import fs from 'fs'
import ejs from 'ejs'
import { uCamelCase, camelCase } from './utils/nomenclature';
import {plural} from './utils/plural'
import {singular} from './utils/singular'


import {
  getProduct,
  getNamesList,
  getSchemasAndTablesOfBD,
  getSchemasOfBD,
  getTableDetailForeignKeysAssoc,
  getTableDetailOfMaster,
  getTableForeignKeysAssocMasterDetail,
  getTableMasterForeignKeysAssoc,
  getTablePrimaryKey,
  getTableStructure,
  getTableUniqueConstraint,
  getTablesOfBD
} from './modules/GetData'



const process = async () => {
    const product = (await getProduct()).rows
    console.log('namesList:', product, '\n')

    const namesList = (await getNamesList()).rows
    console.log('namesList:', namesList, '\n')

    const schemasAndTablesOfBD = (await getSchemasAndTablesOfBD()).rows
    console.log('schemasAndTablesOfBD:', schemasAndTablesOfBD, '\n')

    const schemasOfBD = (await getSchemasOfBD()).rows
    console.log('schemasOfBD:', schemasOfBD, '\n')

    const tableDetailForeignKeysAssoc = (await getTableDetailForeignKeysAssoc({
        schema: 'public',
        tableMaster: 'products',
        tableDetail: 'presentations'
    })).rows
    console.log('tableDetailForeignKeysAssocs: ', tableDetailForeignKeysAssoc, '\n')

    const tableDetailOfMaster = (await getTableDetailOfMaster({
      schema: 'public',
      tableMaster: 'products'
    })).rows
    console.log('tableDetailOfMaster: ', tableDetailOfMaster, '\n')

    const tableForeignKeysAssocMasterDetail = (await getTableForeignKeysAssocMasterDetail({
      schema: 'public',
      tableMaster: 'products',
      tableDetail: 'presentations'
  })).rows
    console.log('tableForeignKeysAssocMasterDetail: ', tableForeignKeysAssocMasterDetail, '\n')

    const tableMasterForeignKeysAssoc = (await getTableMasterForeignKeysAssoc({
      schema: 'public',
      tableMaster: 'products'
    })).rows
    console.log('tableMasterForeignKeysAssoc: ', tableMasterForeignKeysAssoc, '\n')
    
    const tablePrimaryKey = (await getTablePrimaryKey({
        schema: 'public',
        tableMaster: 'products'
    })).rows
    console.log('tablePrimaryKey: ', tablePrimaryKey, '\n')

    const tableStructure = (await getTableStructure({
      schema: 'public',
      tableMaster: 'products'
    })).rows
    console.log('tableStructure: ', tableStructure, '\n')

    const tableUniqueConstraint = (await getTableUniqueConstraint({
      schema: 'public',
      tableMaster: 'products'
    })).rows
    console.log('tableUniqueConstraint: ', tableUniqueConstraint, '\n')

    const tablesOfBD = (await getTablesOfBD({ schema: 'public' })).rows
    console.log('tablesOfBD: ', tablesOfBD, '\n')   
    
}

process()

let people = ['geddy', 'neil', 'alex'];
let content = ejs.render('this-is-a-string [ <%= people.join(", "); %> ] this-is-another-string', {people});

console.log(content);

fs.writeFile(`./docs/content.example`, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

const str = 'we_have_learned_something_new_today';

console.log(uCamelCase(str))
console.log(camelCase(str))
console.log(plural('foot'))
console.log(singular('men'))



