"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      activity_group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Activity Gorup Id is required",
          },
          notEmpty: {
            msg: "Activity Gorup Id is required",
          },
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title is required",
          },
          notEmpty: {
            msg: "Title is required",
          },
        },
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Is Activity is required",
          },
          notEmpty: {
            msg: "Is Activity is required",
          },
        },
      },
      priority: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Priority is required",
          },
          notEmpty: {
            msg: "Priority is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
