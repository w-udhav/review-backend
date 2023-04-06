// Importing required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = Number(process.env.PORT) || 5000;

// Running
app.listen(PORT, () => {
  console.log(`
  ===============================
    Listening on port :: ${PORT}
  ===============================
  `);
});
