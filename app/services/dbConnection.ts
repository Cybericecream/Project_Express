const { Sequelize } = require('sequelize');
let sequelize = new Sequelize('mysql://root:@db:3306/project') // Example for postgres

module.exports = sequelize;