const Address = require("../models/Address");
const User = require("../models/User");

// Temporary OTP store (Later replace with Redis / DB)
const otpStore = {};

exports.sendOTP = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        message: "Phone number is required",
      });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Store OTP temporarily
    otpStore[phone] = otp;

    console.log("OTP (Dev Only):", otp);

    res.status(200).json({
      status: 1,
      message: "OTP sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({
        message: "Phone and OTP are required",
      });
    }

    // Check OTP
    if (otpStore[phone] != otp) {
      return res.status(400).json({
        status: 0,
        message: "Invalid OTP",
      });
    }

    // Check if user already exists
    let user = await User.findOne({ phone });

    if (!user) {
      user = await User.create({
        phone,
        isVerified: true,
      });
    } else {
      user.isVerified = true;
      await user.save();
    }

    // Remove OTP after verification
    delete otpStore[phone];

    res.status(200).json({
      status: 1,
      message: "OTP verified successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.setUserDetails = async (req, res) => {
  try {
    const { userId, firstName, lastName, gender, profilePicture } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!firstName || !lastName || !profilePicture) {
      return res.status(400).json({ message: "Fields are required" });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.gender = gender;
    user.profilePicture = profilePicture;

    await user.save();

    res.status(200).json({
      status: 1,
      message: "User details updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

exports.setAddress = async (req, res) => {
  try {
    const { userId, address, state, pincode, latitude, longitude } = req.body;

    const newAddress = await Address.create({
      userId,
      address,
      state,
      pincode,
      latitude,
      longitude,
    });

    res.status(201).json({
      status: 1,
      message: "Address saved successfully",
      addressId: newAddress._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
