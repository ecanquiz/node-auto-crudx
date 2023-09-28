type PropertyListsParams = { dataOfBD : boolean, customData : boolean}

export const propertyLists = ({ dataOfBD, customData }: PropertyListsParams): void => {

    const dataOfBDList = !dataOfBD ? [] : [
      ["dataOfBD", "namesList", "dataOfBD.namesList", "not in customData"],
      ["dataOfBD", "schemasAndTablesOfBD", "dataOfBD.schemasAndTablesOfBD", "not in customData"],
      ["dataOfBD", "schemasOfBD", "dataOfBD.schemasOfBD", "not in customData"],
      ["dataOfBD", "tableDetailForeignKeysAssoc", "dataOfBD.tableDetailForeignKeysAssoc", "not in customData"],
      ["dataOfBD", "tableDetailOfMaster", "dataOfBD.tableDetailOfMaster"],
      ["dataOfBD", "tableForeignKeysAssocMasterDetail", "dataOfBD.tableForeignKeysAssocMasterDetail", "not included in customData"],
      ["dataOfBD", "tableMasterForeignKeysAssoc", "dataOfBD.tableMasterForeignKeysAssoc"],
      ["dataOfBD", "tablePrimaryKey", "dataOfBD.tablePrimaryKey", "not in customData"],
      ["dataOfBD", "tableStructure", "dataOfBD.tableStructure"],
      ["dataOfBD", "tableUniqueConstraint", "dataOfBD.tableUniqueConstraint", "not in customData"],
      ["dataOfBD", "tablesOfBD", "not include at customData"],
      ["dataOfBD", "tablesStructureOfDetails", "dataOfBD.tablesStructureOfDetails", "not in customData"],
      ["dataOfBD", "tableDetailForeignKeysHelp", "dataOfBD.tableDetailForeignKeysHelp", "not in customData"]
    ]

    const customDataList = !customData ? [] : [
      ["customData", "fn", "customData.fn"],
      ["customData", "tableMaster", "customData.tableMaster"],
      ["customData", "tableStructure", "customData.tableStructure"],
      ["customData", "tableDetailOfMaster", "customData.tableDetailOfMaster"],
      ["customData", "tableMasterForeignKeysAssoc", "customData.tableMasterForeignKeysAssoc"],
      ["customData", "tableStructureClean", "customData.tableStructureClean"]
    ]

    console.table([...dataOfBDList, ...customDataList])
}

export default { propertyLists }