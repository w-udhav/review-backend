const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome admin!" });
});
module.exports = router;
