const express = require("express");
const router = express.Router();

const {
  sendOTP,
  verifyOTP,
  setUserDetails,
  setAddress
} = require("../controllers/authController");

// Signup Flow Routes
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/set-user-details", setUserDetails);
router.post("/set-address", setAddress);

module.exports = router;
