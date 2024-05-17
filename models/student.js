const { Sequelize, DataTypes } = require('sequelize');
// const Class = require('./class');
// const sequelize = new Sequelize('postgres://dev:flceo3zcb1z2x4bl@34.142.178.51:5432/myceleb_test');

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define('Student',{
    masv:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    hosv: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    tensv: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    gioitinh: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    ngaysinh: {
      type:DataTypes.DATEONLY,
      allowNull:false,
    },
    noisinh: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    diachi: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    matinh: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    maquan: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    malop: {
      type:DataTypes.STRING,
      allowNull:false,
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
    // password: DataTypes.STRING
  }, {
    tableName: 'sinhvien',
    sequelize,
    // modelName: 'Student',
  });
  
  return Student;
};