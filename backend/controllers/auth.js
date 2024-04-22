import User from "../models/User.js";
import bcrypt from "bcrypt";
export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = User.create({
      username,
      password: hashedPassword,
    });
    const savedUser = (await user).save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json("This user does not exist");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json("The password is incorrect");
    } else {
      const { location, username, techStack } = user;
      req.session.userId = user._id;
      delete user.password;
      res.status(200).json(req.session.userId);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const logout = async (req, res) => {
  try {
    const destroyed = await req.session.destroy();
    res.status(200).json("Logged Out");
  } catch (error) {
    res.status(500).json("Logout Failed");
  }
};
