
const { DataTypes } = require('sequelize')
const { sqlite_sequelize } = require('../../db/DbUtil')

/**
 * 
 * 账号信息
 */

const AuthUser =  sqlite_sequelize.define('auth_user',{
    //
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username:{},
    password:{},
    first_name:{},
    last_name:{},
    email:{},
    is_staff:{},
    is_super_user:{},
    is_active:{},
    last_login:{},
    date_joined:{}
})