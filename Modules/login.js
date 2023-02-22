const express = require("express");
const router = express.Router();
const jwtToken = require("jsonwebtoken");
const tokenObj = require("../Token/token");
// const jwttoken

router.use(express.json());
router.use(express.urlencoded());

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/Frontend/index.html");
});
router.post("/", (req, res) => {
  console.log(req.body);
  let id = req.body.id;
  let pwd = req.body.pwd;
  tokenObj.token = jwtToken.sign({ id: id, pwd: pwd }, "skill", {
    expiresIn: "180s",
  });

  res.json({
    msg: "Success to login and create token",
    Token: tokenObj.token,
  });
});

module.exports = router;
