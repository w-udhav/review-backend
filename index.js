// Importing required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const admin = require("./routes/admin/admin");
const review = require("./routes/review/review");

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }));
// .use("/", require("./routes"));

app.use("/", (req, res) => {
  res.send("Welcome to API Server.");
});
app.use("/admin/links", admin);
app.use("/review", review);

const PORT = Number(process.env.PORT) || 5000;

// Running
app.listen(PORT, () => {
  console.log(`
  ===============================
    Listening on port :: ${PORT}
  ===============================
  `);
});
