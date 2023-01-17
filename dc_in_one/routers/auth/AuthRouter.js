const express = require('express')
const router = express.Router()
const {AuthUser} = require('../../models/auth/AuthUser')



/**
 * 测试路由连接
 */
router.get('/ping', async (req,res)=>{
    const users = await AuthUser.findAll({attributes: ['username'],where:{username:"admin"}});


    res.send({
        users,
        pong:"pong!"
    })
})

/**
 * 用户注册
 */
router.post('/signup',async (req,res)=>{
    //账号密码
    const { username, password } = req.body
    console.log('/signup','req',req.body )
    //TODO: 注意以上线的时候需要将密码进行盐化
    let result = {
        msg:'ok',
        code:200
    }
    try {
        const user = await AuthUser.build({ username, password })
        await user.save()
    } catch (error) {
        result.msg='failure'
        result.error = error.errors
    }
    res.send(result)
    
})

/**
 * 用户登录
 */

router.get('/signin',async (req,res)=>{
    //验证密码
    const { username,password} = req.body
    console.log('/signin',{ username,password})
    let result ={
        msg:'ok',
        code:200
    }
    try {
        const users = await AuthUser.findAll({
            attributes: ['username', 'password'],
            where:{
                username:username,
                password:password,
                status:'A'
            }});
        if(users.length>0){
            result['data'] = '登录成功!'
            result['token'] = 'aaaaaaaaaaaaaaaaaaaaaa'
        }else{
            result['data'] = '登录失败!请检查账号密码'
            result['msg'] = 'error'
        }
        
    } catch (error) {
        result['msg'] = error
    }
    res.send(result)
})




/**
 * 重置密码
*/



module.exports = router