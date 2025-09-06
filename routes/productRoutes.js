const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { isLoggedIn } = require("../middleware");

// Show all products (home page)
router.get("/", async (req, res, next) => {
  try {
    let products = await Product.find({});
    res.render("home.ejs", { products });
  } catch (err) {
    next(err);
  }
});

// New product form
router.get("/new", isLoggedIn, (req, res) => {
  res.render("newProduct.ejs");
});

// Create new product
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    let {
      productTitle,
      productCategory,
      productDescription,
      price,
      quantity,
      condition,
      yearManufacture,
      brand,
      model,
      length,
      width,
      height,
      weight,
      material,
      color,
      originalPackaging,
      manualIncluded,
      workingCondition
    } = req.body;

    let product = new Product({
      title: productTitle,
      category: productCategory,
      description: productDescription,
      price,
      quantity,
      condition,
      yearManufacture,
      brand,
      model,
      dimensions: {
        length,
        width,
        height,
      },
      weight,
      material,
      color,
      originalPackaging: originalPackaging ? true : false,
      manualIncluded: manualIncluded ? true : false,
      workingCondition,
      owner: req.user._id,
      image: "/images/placeholder.png", // replace when file upload is ready
    });

    await product.save();
    res.redirect(`/products/${product._id}`);
  } catch (err) {
    next(err);
  }
});

// Show product detail
router.get("/details", async (req, res, next) => {
  try {
    res.render("productDetail.ejs");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
