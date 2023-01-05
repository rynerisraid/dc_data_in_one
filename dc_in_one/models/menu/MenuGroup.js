
const { DataTypes } = require('sequelize')
const { sqlite_sequelize } = require('../../db/DbUtil')



/**
 * 
 * 后台管理系统的菜单
*/



/**
 * 菜单
 * 
 * 
 * 
 * 
    CREATE TABLE "admin_menu" (
        "id" integer     NOT NULL PRIMARY KEY AUTOINCREMENT, 
        "menu_name"      varchar(128) NOT NULL, 
        "menu_code"      varchar(128) NOT NULL, 
        "parent_id"      bigint, 
        "node_type"      bigint, 
        "icon"           varchar(150), 
        "link_url"       varchar(150),
        "level"  		 integer, 
        "path"     		 bigint, 
        "is_delete"     bigint
    );

 */

const AdminMenu =  sqlite_sequelize.define('admin_menu',{
        //
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        menu_name:       {type: DataTypes.STRING},
        menu_code:       {type: DataTypes.STRING},
        parent_id:       {type: DataTypes.INTEGER},
        node_type :      {type: DataTypes.INTEGER},
        icon:            { type: DataTypes.STRING },
        link_url:        { type: DataTypes.STRING},
        level:           { type: DataTypes.INTEGER},
        path:            { type: DataTypes.STRING},
        is_delete:       { type: DataTypes.BIGINT, defaultValue: 0},
    },{
        freezeTableName: true,
        //tableName: 'admin_menu',
        // 不想要 createdAt
        createdAt: false,
        updatedAt: false
});

const AdminMenuGroup = sqlite_sequelize.define('admin_menu_group',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    auth_group_id: { type: DataTypes.INTEGER},
    menu_id: { type: DataTypes.INTEGER}
    
})

module.exports = {
    AdminMenu,
    AdminMenuGroup
}