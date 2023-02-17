const express = require('express')
const router = express.Router()
const {AuthUser} = require('../../models/auth/AuthUser')
const { v4:uuidv4 } = require('uuid')   //node uuid
const { db,genid } = require("../../db/DbUtil")


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
        code:200,
        username
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
 * get 请求要用 query
 * get 用 query
 * const { username,password } = req.query;
 */

router.post('/signin',async (req,res)=>{
    //验证密码
    //const { username,password } = req.query;
    const { name, password } = req.body
    //console.log(req)

    //console.log('/signin',{ name,password } )
    let result ={
        message:'登录成功',
        code:0,
        data:{}
    }
    try {
        let token = uuidv4()
        const users = await AuthUser.findAll({
            attributes: ['id','username', 'password'],
            where:{
                username:name,
                password:password,
                status:'A'
            }});
        if(users.length===1){
            let id = users[0].dataValues.id
            //console.log(users[0].dataValues.id)
            await AuthUser.update({ token: token,last_login: Date.parse( new Date()) }, {
                where: {
                    id: id
                }
              });
            result.message= '登录成功!'
            result.data.token= token;
        }else{
            result.message= '账号异常'
            result.code = -1
        }
        
    } catch (error) {
        result.message= '状态异常!'
        result.code = -1
    }
    res.send(result)
})




/**
 * 重置密码
*/



module.exports = router