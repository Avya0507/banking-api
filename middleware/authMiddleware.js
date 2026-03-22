const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const header = req.header("Authorization");

  if (!header) {
    return res.status(401).json("❌ No token, access denied");
  }

  const token = header.split(" ")[1]; // Bearer TOKEN

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json("❌ Invalid token");
  }
};