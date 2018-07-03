const sequelize = require('../db/postgres');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

const User = sequelize.define('user', {
id: {
        type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING
 });

 User.beforeCreate((user, options) => {
    const salt = bcrypt.genSalt(10);
    user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
 });

 module.exports = User;