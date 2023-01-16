
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
            primaryKey: true,
            unique:true
        },
        username:       {type: DataTypes.STRING},
        password:       {type: DataTypes.STRING},
        first_name:     {type: DataTypes.STRING},
        last_name:      {type: DataTypes.STRING},
        email:          { type: DataTypes.STRING },
        is_staff:       { type: DataTypes.BOOLEAN},
        is_super_user:  { type: DataTypes.BOOLEAN},
        is_active:      { type: DataTypes.BOOLEAN},
        last_login:     { type: DataTypes.BIGINT },
        date_joined:    { type: DataTypes.BIGINT }
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