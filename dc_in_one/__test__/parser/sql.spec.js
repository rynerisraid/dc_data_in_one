const { PostgresSQL, PostgreSQLParserVisitor } = require('dt-sql-parser')
const PgLiteVisitor = require('../../utils/LineageGenerator')

const path = require('path')
const fs = require('fs');


const parser = new PostgresSQL();

describe('测试dt-sql-parser', () => {
    it('should be []', () => {
        

        const correctSql = 'select id,name from user1;';
        const errors = parser.validate(correctSql);
        console.log(errors); 
        expect(errors.length).toBe(0);      
    });
    
    it('incorrect sql',()=>{
        const incorrectSql = 'selec id,name from user1;'
        const errors = parser.validate(incorrectSql);
        //console.log(errors); 
        expect(errors).toEqual([
            {
              startLine: 1,
              endLine: 1,
              startCol: 0,
              endCol: 5,
              message: "mismatched input 'SELEC' expecting {<EOF>, 'ALTER', 'ANALYZE', 'CALL', 'CHANGE', 'CHECK', 'CREATE', 'DELETE', 'DESC', 'DESCRIBE', 'DROP', 'EXPLAIN', 'GET', 'GRANT', 'INSERT', 'KILL', 'LOAD', 'LOCK', 'OPTIMIZE', 'PURGE', 'RELEASE', 'RENAME', 'REPLACE', 'RESIGNAL', 'REVOKE', 'SELECT', 'SET', 'SHOW', 'SIGNAL', 'UNLOCK', 'UPDATE', 'USE', 'BEGIN', 'BINLOG', 'CACHE', 'CHECKSUM', 'COMMIT', 'DEALLOCATE', 'DO', 'FLUSH', 'HANDLER', 'HELP', 'INSTALL', 'PREPARE', 'REPAIR', 'RESET', 'ROLLBACK', 'SAVEPOINT', 'START', 'STOP', 'TRUNCATE', 'UNINSTALL', 'XA', 'EXECUTE', 'SHUTDOWN', '--', '(', ';'}"
            }
          ]);
    })

    it('Visitor', () => {
        
    });
    
    
});


describe('测试表格和Select Element',()=>{

  it('单表格的select',()=>{

    //const correctSql = 'select id,name from user1;';
    const abspath = path.join(__dirname,'/examples/select1.sql');       
    const input = fs.readFileSync(abspath,'utf-8');
    
    const tree = parser.parse(input);
    const visitor = new PgLiteVisitor()
    visitor.visit(tree)
    

    let depInputTable = visitor.depsMap.inputTable
    let table = depInputTable.table
    expect(table[0]).toEqual('sjck.ods_tk_prod_list')
    expect(depInputTable.alias[table[0]]).toEqual('a')
    
  })

  it('多表格的select',()=>{
    const abspath = path.join(__dirname,'/examples/select2.sql')
    const input = fs.readFileSync(abspath,'utf-8');
    
    const tree = parser.parse(input);
    const visitor = new PgLiteVisitor()
    visitor.visit(tree)
    let depInputTable = visitor.depsMap.inputTable
    let table = depInputTable.table
    expect(table).toEqual(['sjck.ods_tk_prod_list','intf.tc_product'])
    expect(depInputTable.alias[table[0]]).toEqual('a')

  })

  it('测试Join',()=>{
    const abspath = path.join(__dirname,'/examples/select2.sql')
    const input = fs.readFileSync(abspath,'utf-8');
    
    const tree = parser.parse(input);
    const visitor = new PgLiteVisitor()
    visitor.visit(tree)
    let depInputTable = visitor.depsMap.inputTable
    let table = depInputTable.table
    expect(table).toEqual(['sjck.ods_tk_prod_list','intf.tc_product'])
    expect(depInputTable.alias[table[0]]).toEqual('a')

  })

  it('测试子查询 subquery',()=>{
    const abspath = path.join(__dirname,'/examples/subquery.sql')
    const input = fs.readFileSync(abspath,'utf-8');
    
    const tree = parser.parse(input);
    const visitor = new PgLiteVisitor()
    visitor.visit(tree)
    let depInputTable = visitor.depsMap.inputTable
    let table = depInputTable.table
    expect(table).toEqual(['sjck.ods_tk_prod_list','intf.tc_product'])
    expect(depInputTable.alias[table[0]]).toEqual('a')
    expect(depInputTable.alias[table[1]]).toEqual('b')
  })

  it('测试insert和select语句', () => {
    
  });
  

  
})

describe('测试insert 和 select', () => {
  it('insert into select ',()=>{

  })

});
