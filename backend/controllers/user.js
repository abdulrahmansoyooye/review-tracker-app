import { Review } from "../models/Review.js";
import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({}, "-password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserData = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id, "-password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserReview = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Review.find({ userId: userId }, "-password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const EditUser = async (req, res) => {
  const { id } = req.params;
  console.log({ ...req.body });
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const DeleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);

    res.status(200).json({ message: "deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
