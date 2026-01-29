const express = require("express");
const router = express.Router();

const {
  getBanners,
  getCategories,
  getFeaturedStores,
  getHomeProducts
} = require("../controllers/homeController");


router.get("/banners", getBanners);
router.get("/categories", getCategories);
router.get("/featured-stores", getFeaturedStores);
router.get("/products", getHomeProducts);

module.exports = router;
