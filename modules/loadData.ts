import DB from './db'

export default (tableMaster:string , tableDetail?: string)=> {

    /*const users = DB.exeQry({ qry: "SELECT * FROM users ORDER BY 1 LIMIT 1;" })
    users.then(r=>console.log(r.rows))*/

    const namesList = DB.getNamesList()
    namesList.then(r=>console.log(r.rows))

    const schemasAndTablesOfBDSelect = DB.getSchemasAndTablesOfBDSelect()
    schemasAndTablesOfBDSelect.then(r=>console.log(r.rows))

    const schemasOfBDSelect = DB.getSchemasOfBDSelect()
    schemasOfBDSelect.then(r=>console.log(r.rows))
    
    const tableDetailForeignKeysAssocSelect = DB.getTableDetailForeignKeysAssocSelect(
        [ 'public', 'products', 'presentations'], true
    )
    tableDetailForeignKeysAssocSelect.then(r=>console.log("bbb", r.rows))

}