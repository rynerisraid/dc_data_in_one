const express = require('express')
const router = express.Router()

/**
 * 用户登录
 * get 请求要用 query
 * get 用 query
 * const { username,password } = req.query;
 */

router.get('/analysis2',async (req,res)=>{
    res.send({
        pong:"pong!",
        source:"dataMap"
    })

});

module.exports = router