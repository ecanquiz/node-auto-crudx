export const db = (params: {
    namesList: any[][]
    schemasAndTablesOfBD: any[][]
    schemasOfBD: any[][]
    tableDetailForeignKeysAssoc: any[][]
    tableDetailOfMaster: any[][]
    tableForeignKeysAssocMasterDetail: any[][]
    tableMasterForeignKeysAssoc: any[][]
    tablePrimaryKey: any[][]
    tableStructure: any[][]
    tableUniqueConstraint: any[][]
    tablesOfBD: any[][]
})=>{
    console.log('namesList:', params.namesList, '\n')
    console.log('schemasAndTablesOfBD:', params.schemasAndTablesOfBD, '\n')
    console.log('schemasOfBD:', params.schemasOfBD, '\n')
    console.log('tableDetailForeignKeysAssocs:', params.tableDetailForeignKeysAssoc, '\n')
    console.log('tableDetailOfMaster:', params.tableDetailOfMaster, '\n')
    console.log('tableForeignKeysAssocMasterDetail:', params.tableForeignKeysAssocMasterDetail, '\n')
    console.log('tableMasterForeignKeysAssoc:', params.tableMasterForeignKeysAssoc, '\n')
    console.log('tablePrimaryKey:', params.tablePrimaryKey, '\n')
    console.log('tableStructure:', params.tableStructure, '\n')
    console.log('tableUniqueConstraint:', params.tableUniqueConstraint, '\n')
    console.log('tablesOfBD:', params.tablesOfBD, '\n')
}