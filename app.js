const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();
const port = 3030;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`port ${port}`);
});
