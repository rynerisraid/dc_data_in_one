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
 * 查询菜单项
 * 
 */




/**
 * 新建菜单
 */



/**
 * 修改菜单
*/


/**
 * 删除菜单
 */



module.exports = router