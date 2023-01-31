const { PostgresSQL, PostgreSQLParserVisitor } = require('dt-sql-parser')

const parser = new PostgresSQL()
const sql = `select id,name from user1;`
// parseTree
const tree = parser.parse(sql)

class LineageGenerator extends PostgreSQLParserVisitor{
    constructor(){
        super()
        this.depsMap={
            input:[],
            output:[]
        }
        
    }
    
    

    /*
    visitTable_ref(ctx){
        
    }
    */

    

    /*
    visitTableName(ctx){
        let tableName = ctx.getText().toLowerCase()
        console.log('TableName', tableName)
    }
    visitSelectElements(ctx){
        let selectElements = ctx.getText().toLowerCase()
        console.log('SelectElements', selectElements)
    }
    */
    
    
}


//const visitor = new LineageGenerator()
//visitor.visit(tree)
/**
 * https://github.com/apache/hive/blob/master/ql/src/java/org/apache/hadoop/hive/ql/tools/LineageInfo.java
 * 到这里去抄源码
 */

module.exports = LineageGenerator