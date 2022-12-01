const { Activity } = require("../models/index");

class Controller {
  static async getActivities(req, res, next) {
    try {
      console.log("oke");
      const data = await Activity.findAll();

      res.status(200).json({
        status: "Success",
        message: "Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getActivity(req, res, next) {
    try {
      const { id } = req.params;
      const dataTodo = await Activity.findByPk(id);
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

  static async addActivity(req, res, next) {
    try {
      const { email, title } = req.body;
      const dataTodo = await Activity.create({
        email,
        title,
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

  static async deleteActivity(req, res, next) {
    try {
      const { id } = req.params;

      const datat = await Activity.findByPk(id);

      if (!datat) {
        throw { name: "Data Not Found" };
      }

      const dataTodo = await Activity.destroy({
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

  static async fetchActivity(req, res, next) {
    try {
      const { id } = req.params;
      const { is_active } = req.body;

      const datat = await Activity.findByPk(id);

      if (!datat) {
        throw { name: "Data Not Found" };
      }

      const dataTodo = await Activity.update(
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
