const tokenObj = require("../Token/token");
const jwtToken = require("jsonwebtoken");

const midleware = (req, res, next) => {
  if (tokenObj.token == req.headers.token) {
    jwtToken.verify(tokenObj.token, "skill", (err, decoded) => {
      if (err) {
        res.json({ token: "expire" });
      } else {
        console.log(decoded);
        next();
      }
    });
  } else {
    res.json({ msg: "fail in module1.....!" });
  }
};

module.exports = midleware;
