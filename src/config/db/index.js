const { Sequelize}= require('sequelize');
console.log('===process.env.DB_NAME===', 'myceleb_test')
const sequelize = new Sequelize('myceleb_test', 'dev', 'flceo3zcb1z2x4bl', {
    host: '34.142.178.51',
    dialect:'postgres',
    logging: false,
    timezone: '+07:00'
  });
  const dbcon = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  module.exports=dbcon;