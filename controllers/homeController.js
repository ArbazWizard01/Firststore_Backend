const Banner = require("../models/Banner");
const Category = require("../models/Category");
const Store = require("../models/Store");
const Product = require("../models/Product");


exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.find({ isActive: true }).sort({ createdAt: -1 });

    res.status(200).json({
      status: 1,
      message: "Banners fetched successfully",
      data: banners
    });

  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Server error",
      error: error.message
    });
  }
};



exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true });

    res.status(200).json({
      status: 1,
      message: "Categories fetched successfully",
      data: categories
    });

  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Server error",
      error: error.message
    });
  }
};


exports.getFeaturedStores = async (req, res) => {
  try {
    const stores = await Store.find({
      isFeatured: true,
      isActive: true
    }).limit(10);

    res.status(200).json({
      status: 1,
      message: "Featured stores fetched successfully",
      data: stores
    });

  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Server error",
      error: error.message
    });
  }
};


exports.getHomeProducts = async (req, res) => {
  try {
    const popularProducts = await Product.find({
      isPopular: true,
      isActive: true
    })
      .populate("category", "name")
      .populate("store", "name logo")
      .limit(10);

    const recommendedProducts = await Product.find({
      isRecommended: true,
      isActive: true
    })
      .populate("category", "name")
      .populate("store", "name logo")
      .limit(10);

    res.status(200).json({
      status: 1,
      message: "Home products fetched successfully",
      data: {
        popularProducts,
        recommendedProducts
      }
    });

  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Server error",
      error: error.message
    });
  }
};
