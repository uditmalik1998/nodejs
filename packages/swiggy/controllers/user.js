require("dotenv").config({ path: __dirname + "/.env" });
const UserSchema = require("../models/user");

const registerUser = async (req, res) => {
  const user = await UserSchema.create({ ...req.body });
  const token = user.createJWT();

  res.status(200).json({ username: user.name, token: token });
};

const loginUser = async (req, res) => {
  const { email = "", password = "" } = req.body;

  const user = await UserSchema.findOne({ email });

  const isAuth = await user.comparePassword(password);

  if (!isAuth) {
    res.status(404).end("Enter Valid Creditianals");
  }

  const token = user.createJWT();

  res.status(200).json({ username: user.name, token: token });
};

module.exports = {
  registerUser,
  loginUser,
};
