
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// CREATE THE COMMENT MODEL
class Comment extends Model {}

// CREATE THE FIELDS/COLUMNS FOR COMMENT MODEL
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        // PULL DATA FROM THE USER MODEL | USER ID
        user_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'user',
            key: 'id'
            }
        },
        // PULL DATA FROM THE POST MODEL | POST ID
        post_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'post',
            key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;