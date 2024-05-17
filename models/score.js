'use strict';
const {
  Model
} = require('sequelize');
const { Subject } = require('.');

const Student = require('./student');

module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Score.init({
    diemthi:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    diemquatrinh: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    masv:{
      type:DataTypes.STRING,
      references:{
        model: Student,
        key: 'masv',
      },
      allowNull: false,
    },
    mamonhoc:{
      type:DataTypes.STRING,
      references:{
        model: Subject,
        key: 'mamonhoc',
      },
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
    // password: DataTypes.STRING
  }, {
    tableName:'bangdiem',
    sequelize,
    modelName: 'Score',
  });
  return Score;
};