const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// CREATE THE POST MODEL
class Post extends Model {}

// CREATE THE FIELDS/COLUMNS FOR POST MODEL
Post.init(
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
    modelName: 'post'
  }
);

module.exports = Post;
