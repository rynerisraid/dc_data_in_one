const { PostgresSQL, PostgreSQLParserVisitor } = require('dt-sql-parser')
const express = require('express')
const router = express.Router()
const PgLiteVisitor = require('../../utils/LineageGenerator')

/**
 * 用户登录
 * get 请求要用 query
 * get 用 query
 * const { username,password } = req.query;
 */
const parser = new PostgresSQL();

router.post('/sql_analysis',async (req,res)=>{

    const { sql } = req.body
    console.log(req.body)
    const tree = parser.parse(sql);
    const visitor = new PgLiteVisitor()
    visitor.visit(tree)
    let depsMap = visitor.depsMap

    let result ={
        message:'ok',
        code:0,
        data:{}
    }

    result.data.depsMap = depsMap

    res.send(result)

});

module.exports = router