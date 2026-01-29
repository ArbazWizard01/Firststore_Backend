const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    logo: {
      type: String
    },
    rating: {
      type: Number,
      default: 0
    },
    deliveryTime: {
      type: String
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Store", storeSchema);
