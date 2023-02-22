const express = require("express");
const router = express.Router();

const token = "";
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/Frontend/token.html");
});

router.post("/", [require("../Middleware/check")], (req, res) => {
  res.json({ msg: "Module 1 success.......!" });
});

module.exports = router;
