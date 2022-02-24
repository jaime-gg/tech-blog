
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;