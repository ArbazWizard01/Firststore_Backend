const express = require("express");
const router = express.Router();

const {
  sendOTP,
  verifyOTP,
  setUserDetails,
  setAddress,
  sendLoginOtp,
  verifyLoginOtp,
} = require("../controllers/authController");

// Signup Flow Routes
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/set-user-details", setUserDetails);
router.post("/set-address", setAddress);

//Login Flow Routes
router.post("/login/send-otp", sendLoginOtp);
router.post("/login/verify-otp", verifyLoginOtp);

module.exports = router;
