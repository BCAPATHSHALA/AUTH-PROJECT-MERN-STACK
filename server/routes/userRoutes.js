import express from "express";
import {
  register,
  login,
  logout,
  getMyProfile,
  changePassword,
  updateProfile,
  forgetPassword,
  resetPassword,
  deleteMyProfile,
  getAllUsers,
} from "../controllers/userController.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Register
router.route("/register").post(register);

// Login
router.route("/login").post(login);

// Logout
router.route("/logout").get(logout);

// ForgetPassword
router.route("/forgetpassword").post(forgetPassword);

// ResetPassword
router.route("/resetpassword/:token").put(resetPassword);

// Get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

// Delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

// ChangePassword
router.route("/changepassword").put(isAuthenticated, changePassword);

// UpdateProfile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

// Admin Routes
// Get All User
router.route("/admin/users").get(isAuthenticated, authorizedAdmin, getAllUsers);

export default router;
