const express = require('express')
const router = express.Router()

const users = {
    admin:{
      id:1,
      name:'数据管道工',
      avatar: 'https://avatars.githubusercontent.com/u/25055927?s=400&u=bcc4d3b7f11debafd93abecb15f28a0ddaec1fe9&v=4',//'https://assets.qszone.com/images/avatar.jpg',
      email: 'Ronnie@123.com',
      role: ['admin'],
    }
}

/**
 * 测试路由连接
 */
router.get('/ping', (req,res)=>{

    res.send({
        pong:"pong!"
    })
})


router.get('/',(req,res)=>{
    const token = 'aaaaaaaaaaaaaaaaaaaaaa'
    let result =  {
        code: 0,
        data: {
          ...(users[token] || users.guest),
        },
      }

    res.send(result)

})

module.exports = router