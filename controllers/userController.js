const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// login user
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password, verified: true });
    if (user) {
      res.status(200).send(user);
    } else {
      res.json({
        message: "login fail",
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
//register
const registerController = async (req, res) => {
  try {
    const { password } = req.body;

    const newUser = new userModel({ ...req.body, password, verified: true });
    await newUser.save();

    res.status(201).send("new user added Successfully!");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};
//check user
const checkUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email, verified: true });
    if (user) {
      // res.status(200).send(user);
      res.json({
        message: "user already exists",
        user,
      });
    } else {
      // res.json({
      //     message:'login fail',
      //     user,
      // });
      res.status(200).send(user);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loginController, registerController, checkUser };
