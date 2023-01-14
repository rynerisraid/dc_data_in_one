const express = require('express')
const path = require('path')

const app = express()
const port = 8080


//跨域请求开放
app.use(function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","*");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if(req.method==='OPTIONS') res.sendStatus(200);
    else next();
})


/**
 *  配置路径
 * 
 */
app.use(express.json()) //支持json
app.use(express.static(path.join(__dirname,"public")))

/**
 * 路由
 */
app.use("/test",require("./routers/TestRouter"))
app.use("/auth",require("./routers/auth/AuthRouter"))
app.use("/menu",require("./routers/menu/MenuRouter"))


app.get("/",async (req,res)=>{
    
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`http:localhost:${port}/`)
})