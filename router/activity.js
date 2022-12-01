const Controller = require("../controller/activity");

const activtyRouter = require("express").Router();

activtyRouter.get("/", Controller.getActivities);
activtyRouter.get("/:id", Controller.getActivity);
activtyRouter.post("/", Controller.addActivity);
activtyRouter.delete("/:id", Controller.deleteActivity);
activtyRouter.patch("/:id", Controller.fetchActivity);

module.exports = activtyRouter;
