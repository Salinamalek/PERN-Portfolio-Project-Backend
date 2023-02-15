// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bucketlistController = require("./controllers/bucketlistController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use("/bucketlist", bucketlistController);

// ROUTES
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Bucket List Server");
});

app.get("/not-found", (req, res) => {
  res.status(404).json({ error: "page not found" });
});

app.get("*", (req, res) => {
  res.redirect("/not-found");
});

// EXPORT
module.exports = app;
