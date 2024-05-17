'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subject.init({
    mamonhoc:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    tenmonhoc: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    sotiet:{
      type:DataTypes.INTEGER,
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
    tableName:'monhoc',
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};