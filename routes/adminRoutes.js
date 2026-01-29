const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");

const {
  addBanner,
  addCategory,
  addStore,
  addProduct,
} = require("../controllers/adminController");

router.post("/banner", protect, adminOnly, addBanner);
router.post("/category", protect, adminOnly, addCategory);
router.post("/store", protect, adminOnly, addStore);
router.post("/product", protect, adminOnly, addProduct);

module.exports = router;
