const {AuthUser} = require('../../models/auth/AuthUser')

/**
 * ORM框架的测试文件
 * 
 */

it("auth_user",async ()=>{

    const jane = AuthUser.build({ username: "Jane",password:"123456" });
    
    await jane.save()
    // Jane 现在存在于数据库中！
    console.log(jane instanceof AuthUser); // true
    console.log(jane.toJSON()); // "Jane"


})
    



