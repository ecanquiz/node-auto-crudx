   // console.log("dataOfBD.namesList >>>", dataOfBD.namesList) // not include at customData
   // console.log("dataOfBD.schemasAndTablesOfBD >>>", dataOfBD.schemasAndTablesOfBD) // not include at customData
   // console.log("dataOfBD.schemasOfBD >>>", dataOfBD.schemasOfBD) // not include at customData
   // console.log("dataOfBD.tableDetailForeignKeysAssoc >>>", dataOfBD.tableDetailForeignKeysAssoc) // not include at customData
   // console.log("dataOfBD.tableDetailOfMaster >>>", dataOfBD.tableDetailOfMaster)
   // console.log("dataOfBD.tableForeignKeysAssocMasterDetail >>>", dataOfBD.tableForeignKeysAssocMasterDetail) // not include at customData
   // console.log("dataOfBD.tableMasterForeignKeysAssoc >>>", dataOfBD.tableMasterForeignKeysAssoc)
   // console.log("dataOfBD.tablePrimaryKey >>>", dataOfBD.tablePrimaryKey) // not include at customData
   // console.log("dataOfBD.tableStructure >>>", dataOfBD.tableStructure)
   // console.log("dataOfBD.tableUniqueConstraint >>>", dataOfBD.tableUniqueConstraint) // not include at customData
   // console.log("dataOfBD.tablesOfBD >>>", dataOfBD.tablesOfBD) // not include at customData
   // console.log("dataOfBD.tablesStructureOfDetails >>>", dataOfBD.tablesStructureOfDetails) // not include at customData
   // console.log("dataOfBD.tableDetailForeignKeysHelp >>>", dataOfBD.tableDetailForeignKeysHelp) // not include at customData
   // console.log("customData.fn >>>", customData.fn) 
   // console.log("customData.tableMaster >>>", customData.tableMaster) 
   // console.log("customData.tableStructure >>>", customData.tableStructure) 
   // console.log("customData.tableDetailOfMaster >>>", customData.tableDetailOfMaster) 
   // console.log("customData.tableMasterForeignKeysAssoc >>>", customData.tableMasterForeignKeysAssoc) 
   // console.log("customData.tableStructureClean >>>", customData.tableStructureClean)

export const propertyLists = () => {
    console.table([
        ["dataOfBD", "namesList", "dataOfBD.namesList", "not included in customData"],
        ["dataOfBD", "schemasAndTablesOfBD", "dataOfBD.schemasAndTablesOfBD", "not included in customData"],
        ["dataOfBD", "schemasOfBD", "dataOfBD.schemasOfBD", "not included in customData"],
        ["dataOfBD", "tableDetailForeignKeysAssoc", "dataOfBD.tableDetailForeignKeysAssoc", "not included in customData"],
        ["dataOfBD", "tableDetailOfMaster", "dataOfBD.tableDetailOfMaster"],
        ["dataOfBD", "tableForeignKeysAssocMasterDetail", "dataOfBD.tableForeignKeysAssocMasterDetail", "not included in customData"],
        ["dataOfBD", "tableMasterForeignKeysAssoc", "dataOfBD.tableMasterForeignKeysAssoc"],
        ["dataOfBD", "tablePrimaryKey", "dataOfBD.tablePrimaryKey", "not included in customData"],
        ["dataOfBD", "tableStructure", "dataOfBD.tableStructure"],
        ["dataOfBD", "tableUniqueConstraint", "dataOfBD.tableUniqueConstraint", "not included in customData"],
        ["dataOfBD", "tablesOfBD", "not include at customData"],
        ["dataOfBD", "tablesStructureOfDetails", "dataOfBD.tablesStructureOfDetails", "not included in customData"],
        ["dataOfBD", "tableDetailForeignKeysHelp", "dataOfBD.tableDetailForeignKeysHelp", "not included in customData"],
        ["customData", "fn", "customData.fn"],
        ["customData", "tableMaster", "customData.tableMaster"],
        ["customData", "tableStructure", "customData.tableStructure"],
        ["customData", "tableDetailOfMaster", "customData.tableDetailOfMaster"],
        ["customData", "tableMasterForeignKeysAssoc", "customData.tableMasterForeignKeysAssoc"],
        ["customData", "tableStructureClean", "customData.tableStructureClean"]
    ])
}

export default {
  propertyLists
}