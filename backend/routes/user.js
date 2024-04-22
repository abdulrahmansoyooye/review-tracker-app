import express from "express";
import { loginUser, logout, registerUser } from "../controllers/auth.js";
import {
  DeleteUser,
  EditUser,
  getAllUsers,
  getUserData,
  getUserReview,
} from "../controllers/user.js";
import { getAllReview } from "../controllers/review.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

// User Register && Login
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", logout);
// Get All users data
router.get("/", isAuthenticated, getAllUsers);
// Get userdata
router.get("/profile/:id", isAuthenticated, getUserData);
router.get("/review/:userId", isAuthenticated, getUserReview);
// Edit User information
router.patch("/:id", isAuthenticated, EditUser);

// Admin Routes
router.get("/admin/:id", isAuthenticated, isAdmin, getAllReview);


// Dwlete User
router.delete("/:id", isAuthenticated,  DeleteUser);

export default router;
