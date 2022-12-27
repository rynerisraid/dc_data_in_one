const sqlite3 = require("sqlite3").verbose()
const path = require('path')
const GenId = require('../utils/Snowflake')
const { Sequelize } = require('sequelize')

 /**
 * snowflake 算法生成id
 * 
 */
const genid = new GenId({ WorkerId: 1 });


 /**
 * 数据库连接 
 */
var db = new sqlite3.Database(path.join(__dirname,"all_data_dc.db"))


db.async = {}
//异步处理的方式执行原生 SQL
db.async.all = (sql, params) =>{
    return new Promise((resolve,reject)=>{
        db.all(sql,params,(err,rows)=>{
            resolve({err,rows})
        })
    })
}

db.async.run = (sql,params)=>{
    return new Promise((resolve, reject)=>{
        db.run(sql,params,(err,rows)=>{
            resolve({ err, rows })
        })
    })
}

 /**
 * 数据库 ORM 框架配置文件
 */

const sqlite_sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname,"all_data_dc.db")
});


module.exports = {
    db,
    genid,
    sqlite_sequelize
}