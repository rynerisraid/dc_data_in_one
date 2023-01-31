const { GenericSQL, SqlParserVisitor } = require('dt-sql-parser')

const parser = new GenericSQL()
const sql = `select id,name from user1;`
// parseTree
const tree = parser.parse(sql)

class LineageGenerator extends SqlParserVisitor{
    constructor(){
        super()
        this.depMap = {}
        
    }
    
    visitTableName(ctx){
        let tableName = ctx.getText().toLowerCase()
        console.log('TableName', tableName)
    }
    visitSelectElements(ctx){
        let selectElements = ctx.getText().toLowerCase()
        console.log('SelectElements', selectElements)
    }
}


//const visitor = new LineageGenerator()
//visitor.visit(tree)
/**
 * https://github.com/apache/hive/blob/master/ql/src/java/org/apache/hadoop/hive/ql/tools/LineageInfo.java
 * 到这里去抄源码
 */

module.exports = LineageGenerator