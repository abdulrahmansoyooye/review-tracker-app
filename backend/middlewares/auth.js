import User from "../models/User.js";

export const isAuthenticated = (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).json("Access Denied");
    }
    next()
  } catch (error) {
    console.error(error);
  }
};

export const isAdmin = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (user.role === "admin") {
    next();
  } else {
    res.status(403).json("Login as admin to continue");
  }
};
