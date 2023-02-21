//import { antlr, TablePrimary } from "rhombic";



export function parseLineageBySql(input){

  try {
    const parsingOptions = {
      // if double quotes should quote identifiers:
      doubleQuotedIdentifier: true
    };
    const q = antlr.parse(input, parsingOptions);
  
    console.log('getUsedTables',q.getUsedTables()); // [{ tableName: "abc" }];
    console.log(q)
    const getTable = (table) => {
      /* Logic to retrieve table & columns metadata */
      console.log(table)
    };
  
    // Whether to use "mergedLeaves" or "tree" lineage type
    const mergedLeaves = true;
    const lineageOptions = {
      positionalRefsEnabled: false
    };
    const lineage = q.getLineage(getTable, mergedLeaves, lineageOptions);
    console.log('lineage',lineage)
  } catch (e) {
    // Parsing errors
  }
}

