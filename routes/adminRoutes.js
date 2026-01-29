const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");

const {
  addBanner,
  addCategory,
  addStore,
  addProduct,
} = require("../controllers/adminController");

router.post("/add-banner", protect, adminOnly, addBanner);
router.post("/add-category", protect, adminOnly, addCategory);
router.post("/add-store", protect, adminOnly, addStore);
router.post("/add-product", protect, adminOnly, addProduct);

module.exports = router;
