const axios = require("axios");

const router = require("express").Router();

// Primary Route

router.use("/review", require("./review"));
router.use("/admin", require("./admin"));

// 404
router.use("*", (req, res) => {
  res.status(404).json({
    message: "404! Page Not Found!",
    route: req.originalUrl,
  });
});

module.exports = router;
