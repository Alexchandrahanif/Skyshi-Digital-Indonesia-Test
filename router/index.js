const router = require("express").Router();

const activtyRouter = require("./activity");
const todoRouter = require("./todo");

router.use("/activity-groups", activtyRouter);
router.use("/todo-items", todoRouter);

module.exports = router;
