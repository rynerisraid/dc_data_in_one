const express = require('express')
const app = express()
const path = require('path')

const port = 8080


/**
 *  配置路径
 * 
 */

app.use(express.static(path.join(__dirname,"public")))

/**
 * 路由
 */
app.use("/test",require("./routers/TestRouter"))
app.use("/auth",require("./routers/auth/AuthRouter"))


app.get("/",async (req,res)=>{
    
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`http:localhost:${port}/`)
})