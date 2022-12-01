const Controller = require("../controller/todo");

const todoRouter = require("express").Router();

todoRouter.get("/:id", Controller.getTodo);
todoRouter.get("/", Controller.getTodos);
todoRouter.post("/", Controller.addTodo);
todoRouter.delete("/:id", Controller.deleteTodo);
todoRouter.patch("/:id", Controller.fetchTodo);

module.exports = todoRouter;
