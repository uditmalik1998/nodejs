require("dotenv").config({ path: __dirname + "/.env" });
const UserSchema = require("../models/user");

const registerUser = async (req, res) => {
  const user = await UserSchema.create({ ...req.body });
  const token = user.createJWT();

  res.status(200).json({ username: user.name, token: token });
};

module.exports = {
  registerUser,
};
