const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('artist', {
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
};