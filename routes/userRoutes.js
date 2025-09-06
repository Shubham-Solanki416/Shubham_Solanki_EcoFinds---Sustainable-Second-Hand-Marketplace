const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const { isLoggedIn } = require("../middleware");

// User Dashboard
router.get("/dashboard", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
      .populate("previousPurchases")
      .populate("cart");
    res.render("userDashboard.ejs", { user });
  } catch (err) {
    next(err);
  }
});

// Cart Page
router.get("/cart", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate("cart");
    res.render("cart.ejs", { cart: user.cart, user });
  } catch (err) {
    next(err);
  }
});

// Add to Cart
router.post("/:id/cart", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    user.cart.push(req.body.productId);
    await user.save();
    res.redirect("/users/cart");
  } catch (err) {
    next(err);
  }
});

// Remove from Cart
router.delete("/:id/cart/:productId", isLoggedIn, async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $pull: { cart: req.params.productId }
    });
    res.redirect("/users/cart");
  } catch (err) {
    next(err);
  }
});


module.exports = router;
