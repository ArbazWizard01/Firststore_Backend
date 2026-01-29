const Banner = require("../models/Banner");
const Category = require("../models/Category");
const Store = require("../models/Store");
const Product = require("../models/Product");


exports.addBanner = async (req, res) => {
  try {
    const banner = new Banner(req.body);
    await banner.save();

    res.status(201).json({
      status: 1,
      message: "Banner added successfully",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Error adding banner",
      error: error.message,
    });
  }
};

exports.addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();

    res.status(201).json({
      status: 1,
      message: "Category added successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Error adding category",
      error: error.message,
    });
  }
};

exports.addStore = async (req, res) => {
  try {
    const store = new Store(req.body);
    await store.save();

    res.status(201).json({
      status: 1,
      message: "Store added successfully",
      data: store,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Error adding store",
      error: error.message,
    });
  }
};


exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json({
      status: 1,
      message: "Product added successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Error adding product",
      error: error.message,
    });
  }
};
