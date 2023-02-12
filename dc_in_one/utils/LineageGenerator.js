const { PostgresSQL, 
        PostgreSQLParserVisitor,
        PostgreSQLParserListener } = require('dt-sql-parser')

//const parser = new PostgresSQL()
//const sql = `select id,name from user1;`
// parseTree
// parseTree
//const tree = parser.parse(sql)


class PgLiteVisitor extends PostgreSQLParserVisitor{
    
    constructor(props) {
        super(props);
        this.depsMap={
            inputTable:{
                table:[],
                alias:{},
                cols:[]
            },
            outputTable:{

            }
        }
        this.qualifiedName = ''
    }
    
    visitIdentifier(ctx){
        let identifierName = ctx.getText().toLowerCase();
        //console.log('identifierName',identifierName)
    }

    visitQualified_name(ctx){
        this.qualifiedName = ctx.getText().toLowerCase();
        //console.log('qualifiedName',qualifiedName)
        this.depsMap.inputTable.table.push(this.qualifiedName)
    }

    visitAlias_clause(ctx){
        let aliasName = ctx.getText().toLowerCase();
        //console.log('aliasName',aliasName)
        if(this.qualifiedName!==''){
            this.depsMap.inputTable.alias[this.qualifiedName] = aliasName
            this.qualifiedName = ''
        }
        
    }

    visitTarget_list(ctx){
        let targetListName = ctx.getText().toLowerCase()
        targetListName.split(',').forEach(item=>{
            this.depsMap.inputTable.cols.push(item)
        })
    }
    

}





//const visitor = new LineageGenerator()
//visitor.visit(tree)
/**
 * https://github.com/apache/hive/blob/master/ql/src/java/org/apache/hadoop/hive/ql/tools/LineageInfo.java
 * 到这里去抄源码
 */

module.exports = PgLiteVisitor