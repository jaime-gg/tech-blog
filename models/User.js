const { Model, DataTypes } = require('sequelize');
// USE FOR PASSWORD PROTECTION LATER 
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// CREATE THE USER MODEL
class User extends Model {}

// CREATE THE FIELDS/COLUMNS FOR USER MODEL
User.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
