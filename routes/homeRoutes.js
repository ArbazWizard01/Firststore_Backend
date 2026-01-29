const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getBanners,
  getCategories,
  getFeaturedStores,
  getHomeProducts,
} = require("../controllers/homeController");

router.get("/banners", protect, getBanners);
router.get("/categories", protect, getCategories);
router.get("/featured-stores", protect, getFeaturedStores);
router.get("/products", protect, getHomeProducts);

module.exports = router;
