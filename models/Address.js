const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  address: {
    type: String,
    required: true
  },

  state: {
    type: String,
    required: true
  },

  pincode: {
    type: String,
    required: true
  },

  latitude: {
    type: String
  },

  longitude: {
    type: String
  }

}, { timestamps: true });

module.exports = mongoose.model("Address", addressSchema);
