
const { DataTypes } = require('sequelize')
const { sqlite_sequelize } = require('../../db/DbUtil')

/**
 * 
 * 账号信息：
 * 数据库表格DDL auth_user
 * 
    
    CREATE TABLE `auth_user` (
        "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
        "username" varchar(128) not null unique, 
        "password" varchar(128),
        "first_name" varchar(150), 
        "last_name" varchar(150), 
        "email" varchar(150), 
        "is_super_user" bool,
        "is_active" bool not null default true,
        "last_login" datetime,
        "date_joined" varchar(150),
        "status" varchar(50) NOT NULL default 'A'
    );

    alter table auth_user add token varchar(255)

    drop table auth_user

    select * from auth_user

    SELECT `username`, `password` FROM `auth_user` AS `auth_user` WHERE `auth_user`.`username` = 'admin';
 * 
 */

const AuthUser =  sqlite_sequelize.define('auth_user',{
        //
        // id:{
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,
        //     unique:true
        // },
        username:       {type: DataTypes.STRING},
        password:       {type: DataTypes.STRING},
        first_name:     {type: DataTypes.STRING},
        last_name:      {type: DataTypes.STRING},
        email:          { type: DataTypes.STRING },
        is_super_user:  { type: DataTypes.BOOLEAN},
        is_active:      { type: DataTypes.BOOLEAN},
        last_login:     { type: DataTypes.BIGINT },
        date_joined:    { type: DataTypes.BIGINT },
        token:          { type: DataTypes.STRING }
    },{
        //freezeTableName: true,
        tableName: 'auth_user',
        // 不想要 createdAt
        createdAt: false,
        updatedAt: false
    });

module.exports = {
    AuthUser
}