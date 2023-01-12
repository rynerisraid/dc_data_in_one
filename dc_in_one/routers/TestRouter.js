const express = require('express')
const router = express.Router()

const { sqlite_sequelize } = require("../db/DbUtil")
const { QueryTypes } = require('sequelize');


router.get('/test_db', async (req,res)=>{

    const results = await sqlite_sequelize.query(`select 'hello' as col1`,{ type: QueryTypes.SELECT })
    
    res.send({
        results
    })
})

module.exports = router