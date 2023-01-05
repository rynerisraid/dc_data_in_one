
const { DataTypes } = require('sequelize')
const { sqlite_sequelize } = require('../../db/DbUtil')


/**
 * 报表实例
 */

const ReportTemplate =  sqlite_sequelize.define('report_template',{
    //
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    report_name:    { type: DataTypes.STRING},    //报表名称
    report_group:   { type: DataTypes.STRING},    //报表分组
    report_type:     { type: DataTypes.STRING},   //报表类型
    create_user:     { type: DataTypes.STRING},   //创建用户
    report_state:    { type: DataTypes.STRING},   //报表状态
    create_time:     { type: DataTypes.BIGINT},   //创建时间
    update_time:     { type: DataTypes.BIGINT}    //更新时间

},{
    freezeTableName: true,
    //tableName: 'admin_menu',

    // 不想要 createdAt
    createdAt: false,

    // 想要 updatedAt 但是希望名称叫做 updateTimestamp
    updatedAt: false
});

const ReportColumn = sqlite_sequelize.define('report_column',{
    //
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    report_id:      { type: DataTypes.INTEGER },   //该列所关联报表id
    column_field:   { type: DataTypes.STRING  },   // 列字段 
    column_name:    { type: DataTypes.STRING  },   //列名称
    column_state:   { type: DataTypes.STRING },    //列状态
    is_selector:    { type: DataTypes.BOOLEAN }     //选择器

},{
    freezeTableName: true,
    //tableName: 'admin_menu',
    // 不想要 createdAt
    createdAt: false,
    updatedAt: false
})

module.exports = {
    ReportTemplate,
    ReportColumn
}

