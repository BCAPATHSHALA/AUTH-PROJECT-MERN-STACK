import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendToken } from "../utils/sendToken.js";
import crypto from "crypto";

// Register API
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new ErrorHandler("Please enter all field", 400));
  }

  let user = await User.findOne({ email });
  if (user) return next(new ErrorHandler("User Already Exist", 409));

  user = await User.create({
    name,
    email,
    password,
  });

  sendToken(res, user, "Registered Successfully", 201);
});

// Login Api
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter all field", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler("User Doesn't Exist", 401));

  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    return next(new ErrorHandler("Incorrect Email or Password", 401));

  sendToken(res, user, `Welcome back, ${user.name}`, 200);
});

// Logout API
export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});

// Get Profile API
export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Change Password API
export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    return next(new ErrorHandler("Please enter all field", 400));
  }

  const user = await User.findById(req.user._id).select("+password");

  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) {
    return next(new ErrorHandler("Incorrect old password", 400));
  }

  user.password = newPassword;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
});

// Update Profile API
export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;

  const user = await User.findById(req.user._id);

  if (name) user.name = name;
  if (email) user.email = email;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully",
  });
});

// Forget password API
export const forgetPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) return next(new ErrorHandler("User not found", 404));

  const resetToken = await user.getResetToken();

  await user.save();

  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  const message = `Click on the link to reset your password. ${url}. If you have not request then please ignore.`;

  //   Send token via email
  await sendEmail(user.email, "CourseBundler Reset Password", message);

  res.status(200).json({
    success: true,
    message: `Reset token has been sent to ${user.email}`,
  });
});

// Reset Password API
export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token } = req.params;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });

  if (!user)
    return next(new ErrorHandler("Token is invalid or has been expired", 401));

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
});

// Delete My Profile API
export const deleteMyProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  await User.deleteOne(user);

  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User Deleted Successfully",
    });
});

// Admin Controllers API
export const getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    users,
  });
});
