const { sqlite_sequelize } = require("../../db/DbUtil")
const { QueryTypes } = require('sequelize');

it("测试路由中的sql查询语句",async()=>{

    const results = await sqlite_sequelize.query(`select 'hello' as col1`,{ type: QueryTypes.SELECT })
    
    expect(results[0]["col1"]).toBe('hello');
    
})
