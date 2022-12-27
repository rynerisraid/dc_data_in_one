const { sqlite_sequelize } = require("../../db/DbUtil")
const { QueryTypes } = require('sequelize');

it("连接到sqlite3",async()=>{
    const results = await sqlite_sequelize.query(`select 1`,{ type: QueryTypes.SELECT })
    
    expect(results[0]["1"]).toBe(1);
    
})
