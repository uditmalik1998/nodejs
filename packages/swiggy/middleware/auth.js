const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = req.headers.authorization || "";

  if (token.includes("Bearer ") || token !== "") {
    token = token.split(" ")[1];
  } else {
    return res.status(404).json({ msg: "UnAuthorize" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWTSECRET);
    req.user = { userId: payload.id, username: payload.username };
    next();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = auth;
