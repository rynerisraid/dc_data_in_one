const { GenericSQL, SqlParserVisitor } = require('dt-sql-parser')

const parser = new GenericSQL()
const sql = `select id,name from user1;`
// parseTree
const tree = parser.parse(sql)

class LineageGenerator extends SqlParserVisitor{
    constructor(){
        this.depMap = {}
        super()
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

const visitor = new LineageGenerator()
visitor.visit(tree)