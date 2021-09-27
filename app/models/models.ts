const { DataTypes } = require('sequelize');

let sequelize = require('../services/dbConnection');

module.exports = function (sequelize, DataTypes) {
    var Artist = sequelize.define('artist', {
        // Model attributes are defined here
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
    });

    return Artist;
};