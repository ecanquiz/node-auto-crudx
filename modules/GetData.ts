import DB from './DB'

export const getProduct = async () => {
    return await DB
        .exeQry({ text: "SELECT * FROM products ORDER BY 1 LIMIT 1;" })
}

export const getNamesList = async () => {
    return await DB.getNamesList()
}

export const getSchemasAndTablesOfBD = async () => {
    return await DB.getSchemasAndTablesOfBD()
}

export const getSchemasOfBD = async () => {
    return await DB.getSchemasOfBD()
}

export const getTableDetailForeignKeysAssoc = async (values: {
    schema: string, tableMaster: string, tableDetail: string
}) => {
    return await DB.getTableDetailForeignKeysAssoc(values)
}

export const getTableDetailOfMaster = async (values: {
    schema: string, tableMaster: string
}) => {
    return await DB.getTableDetailOfMaster(values)
}

export const getTableForeignKeysAssocMasterDetail = async (values: {
    schema: string, tableMaster: string, tableDetail: string
}) => {
    return await DB.getTableForeignKeysAssocMasterDetail(values)
}

export const getTableMasterForeignKeysAssoc = async (values: {
    schema: string, tableMaster: string
}) => {
    return await DB.getTableMasterForeignKeysAssoc(values)
}

export const getTablePrimaryKey = async (values: {
    schema: string, tableMaster: string
}) => {
    return await DB.getTablePrimaryKey(values)
}

export const getTableStructure = async (values: {
    schema: string, tableMaster: string
}) => {
    return await DB.getTableStructure(values)
}

export const getTableUniqueConstraint = async (values: {
    schema: string, tableMaster: string
}) => {
    return await DB.getTableUniqueConstraint(values)
}

export const getTablesOfBD = async (values: { schema: string }) => {
    return await DB.getTablesOfBD(values, true)
}
