const express = require('express')
const router = express.Router()



/**
 * 测试路由连接
 */
router.get('/ping', (req,res)=>{

    res.send({
        pong:"pong!"
    })
})

/**
 * 查询报表
 * 
 */




/**
 * 新增报表
 */



/**
 * 修改报表
*/


/**
 * 删除报表
 */



module.exports = router