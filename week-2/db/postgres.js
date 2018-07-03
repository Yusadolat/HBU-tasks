const Sequelize = require('sequelize');

//const sequelize = new Sequelize('database', 'username', 'password'
const sequelize = new Sequelize('users', 'yusuf', '1234567', {
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.sync()

module.exports = sequelize;
