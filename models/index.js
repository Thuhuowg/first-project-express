'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}



db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.subject = require("./subject.js")(sequelize,Sequelize);
db.major=require("./major.js")(sequelize,Sequelize);
db.class=require("./class.js")(sequelize,Sequelize);
db.score=require("./score.js")(sequelize,Sequelize);
db.faculty=require("./faculty.js")(sequelize,Sequelize);
db.course=require("./course.js")(sequelize,Sequelize);
db.student=require("./student.js")(sequelize,Sequelize);
// db.class.hasMany(db.student);
// db.student.belongsTo(db.class);
db.class.hasMany(db.student, { as: 'students', foreignKey: 'malop'});
db.student.belongsTo(db.class, { as: 'classes', foreignKey: 'malop' });
module.exports = db;
