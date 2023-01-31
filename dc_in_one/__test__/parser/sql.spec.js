const {GenericSQL} = require ('dt-sql-parser')
const LineageGenerator = require('../../utils/LineageGenerator')

const parser = new GenericSQL();
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

  it('visit table and element',()=>{

    const correctSql = 'select id,name from user1;';
    const tree = parser.parse(correctSql);
    const visitor = new LineageGenerator()
    visitor.visit(tree)
  })

})