const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const { name } = require('ejs');

const Travel = sequelize.define('Travel',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    }
},  
    {
        tableName : 'travelList',
        timestamps : false,     // createAt, updatedAt 컬럼 사용 안함
    },
)

module.exports = Travel;