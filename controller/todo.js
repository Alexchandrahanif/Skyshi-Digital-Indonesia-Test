const { Todo } = require("../models/index");

class Controller {
  static async getTodos(req, res, next) {
    try {
      const dataTodo = await Todo.findAll();
      res.status(200).json({
        status: "Success",
        message: "Success",
        data: dataTodo,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getTodo(req, res, next) {
    try {
      const { id } = req.params;
      const dataTodo = await Todo.findByPk(id);
      if (!dataTodo) {
        throw { name: "Data Not Found" };
      }
      res.status(200).json({
        status: "Success",
        message: "Success",
        data: dataTodo,
      });
    } catch (error) {
      next(error);
    }
  }

  static async addTodo(req, res, next) {
    try {
      const { activity_group_id, title, is_active, priority } = req.body;
      const dataTodo = await Todo.create({
        activity_group_id,
        title,
        is_active,
        priority,
      });
      res.status(201).json({
        status: "Success",
        message: "Success",
        data: dataTodo,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteTodo(req, res, next) {
    try {
      const { id } = req.params;

      const datat = await Todo.findByPk(id);

      if (!datat) {
        throw { name: "Data Not Found" };
      }

      const dataTodo = await Todo.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        status: "Success",
        message: "Success",
        data: {},
      });
    } catch (error) {
      next(error);
    }
  }

  static async fetchTodo(req, res, next) {
    try {
      const { id } = req.params;
      const { is_active } = req.body;

      const datat = await Todo.findByPk(id);

      if (!datat) {
        throw { name: "Data Not Found" };
      }

      const dataTodo = await Todo.update(
        {
          is_active,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(200).json({
        status: "Success",
        message: "Success",
        data: dataTodo,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
