const { Sequelize, DataTypes } = require('sequelize');
// const Major = require('./major');
// const Course = require('./course');
// const Student = require('./student');
// const sequelize = new Sequelize('postgres://dev:flceo3zcb1z2x4bl@34.142.178.51:5432/myceleb_test');
module.exports = (sequelize, Sequelize) => {
const Class = sequelize.define('Class', {
  malop:{
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  tenlop: {
    type:DataTypes.STRING,
    allowNull:false,
  },
  manganh:{
    type:DataTypes.STRING,
    // references:{
    //   model: Major,
    //   key: 'manganh',
    // },
    allowNull: false,
  },
  makhoahoc:{
    type:DataTypes.STRING,
    // references:{
    //   model: Course,
    //   key: 'makhoahoc',
    // },
    allowNull: false,
  },
  createdAt: {
    type:DataTypes.TIME,
    allowNull:false,
    field: 'created_at'
  },
  updatedAt: {
    type:DataTypes.DATE,
    field:'updated_at',
  },
  deleted_at: DataTypes.DATE,
},
{
  sequelize,
  tableName: 'lop',
},
);

return Class;
}

