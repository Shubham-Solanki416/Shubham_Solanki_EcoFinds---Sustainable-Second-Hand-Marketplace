const express = require("express");
const app = express();
let port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User.js");
const {isLoggedIn} = require("./middleware.js");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const methodOverride = require("method-override");

let sessionOptions = {
    secret: "supersecret",
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionOptions));
app.use(methodOverride("_method"));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main().then(()=>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecofinds');
}

// for parsing requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// for EJS
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// for public folder
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/images")));


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// middleware
app.use((req,res,next)=>{
    res.locals.currUser = req.user;
    next();
});

app.use("/", authRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.get("/test",(req,res)=>{
    res.send("test successful");
});

app.get("/demouser",async(req,res)=>{
    let fakeUser = new User({
        email: "student@gmail.com",
        username:"raj",
    });

    let registeredUser = await User.register(fakeUser,"helloworld");
    res.send(registeredUser);
});

// User routes
// app.get("/signup",(req,res)=>{
//     res.render("signup.ejs");
// });

// app.post("/signup",async(req,res)=>{
//     let {username,email,password} = req.body;
//     const newUser = new User({email,username});
//     const registeredUser = await User.register(newUser,password);

//     console.log(registeredUser);
    
//     req.login(registeredUser,(err)=>{
//         if(err){
//             next(err);
//         }
//         res.redirect("/products");
//     })
// })

// app.get("/login",(req,res)=>{
//     res.render("login.ejs");
// });

// app.post("/login",passport.authenticate("local",{
//     failureRedirect: "/login",
// }), async(req,res)=>{
//     res.redirect("/products");
// })

// app.get("/logout",(req,res)=>{
//     req.logOut((err)=>{
//         if(err){
//             return next(err);
//         }
//         res.redirect("/products");
//     })
// });

// Home page routes


// User dashboard
app.get("/users/one",(req,res)=>{
    res.render("userDashboard.ejs");
});


// error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occurred" } = err;
    res.status(status).send(message);
});

app.get("/users/one/cart",(req,res)=>{
    res.render("cart.ejs");
})

app.listen(port,()=>{
    console.log("app is listening");
})