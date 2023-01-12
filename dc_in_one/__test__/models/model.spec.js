const {AuthUser} = require('../../models/auth/AuthUser')
const { AdminMenu, AdminMenuGroup } = require('../../models/menu/MenuGroup')

/**
 * ORM框架的测试文件
 * 
 */

describe('ORM框架的测试文件',()=>{
    it("auth_user",async ()=>{

        // const jane = AuthUser.build({ username: "Jane",password:"123456" });
        
        // await jane.save()
        // // Jane 现在存在于数据库中！
        // console.log(jane instanceof AuthUser); // true
        // console.log(jane.toJSON()); // "Jane"
    
        // 查询所有用户
        const users = await AuthUser.findAll({attributes: ['username', 'password'],where:{id:1}});
        //console.log(users[0].dataValues)
        
        expect(JSON.stringify(users[0].dataValues)).toBe(JSON.stringify({username: "Jane",password: "123456"}))
        console.log(JSON.stringify(users[0].dataValues))
    })

    it('auth_user:测试登录', async()=>{
        // 查询所有用户
        const users = await AuthUser.findAll({attributes: ['username', 'password'],where:{username:"Jane"}});
        //console.log(users[0].dataValues)
        
        expect(JSON.stringify(users[0].dataValues)).toBe(JSON.stringify({username: "Jane",password: "123456"}))
    
    })
})

    

/**
 * 后台系统的菜单栏
 * 
 */
it("admin_menu", async()=>{
    // const menu = AdminMenu.build({menu_name:"首页", menu_code:"system_main", parent_id:0,nodetype:0})

    // await menu.save()
    // // Jane 现在存在于数据库中！
    // console.log(menu instanceof AdminMenu); // true
    // console.log(menu.toJSON()); // 


    // 查询所有用户
    const menus = await AdminMenu.findAll();
    console.log(menus.every(menus => menus instanceof AdminMenu)); // true
    console.log("All menus:", JSON.stringify(menus, null, 2));
})