const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");

// signup
router.get("/signup", (req, res) => {
    res.render("signup.ejs");
});

router.post("/signup", async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) return next(err);
            res.redirect("/products");
        });
    } catch (err) {
        next(err);
    }
});

// login
router.get("/login", (req, res) => {
    res.render("login.ejs");
});

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login"
}), (req, res) => {
    res.redirect("/products");
});

// logout
router.get("/logout", (req, res, next) => {
    req.logOut((err) => {
        if (err) return next(err);
        res.redirect("/products");
    });
});

module.exports = router;
