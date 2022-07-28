const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const createError = require("http-errors");

const customerRoutes = require("./api/routes/customerRoute");
const logEvents = require("./api/utils/logEvents");
require("./config/mongoDb");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use("/customers", customerRoutes);
app.get("/", (req, res) => res.send("Hello World!"));
// Handler Error
app.use((req, res, next) => {
  next(createError.NotFound("This route does not exist."));
});
app.use((err, req, res, next) => {
  logEvents(`${req.url}---${req.method}---${err.message}`);
  res.json({
    status: false,
    message: err.message,
  });
});
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
