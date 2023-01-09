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
 * 用户注册
 * 
 */

router.get('/signin',(req,res)=>{
    
})




/**
 * 用户登录
 */



/**
 * 重置密码
*/



module.exports = router