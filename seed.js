const mongoose = require("mongoose");
const Product = require("./models/Product");
const User = require("./models/User");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecofinds");
  console.log("Connected to MongoDB for seeding...");
}

main().then(() => seed()).catch(err => console.log(err));

async function seed() {
  try {
    // get one user (make sure you already have at least 1 user registered)
    const user = await User.findOne({});
    if (!user) {
      console.log("No user found. Please register a user first.");
      process.exit();
    }

    const sampleProducts = [
      {
        title: "Vintage Denim Jacket",
        description: "High-quality vintage denim jacket from the 90s.",
        category: "Clothing",
        price: 35,
        quantity: 5,
        condition: "Good",
        brand: "Levi's",
        color: "Blue",
        material: "Denim",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80",
        owner: user._id,
      },
      {
        title: "Reclaimed Wood Chair",
        description: "Beautiful chair made from reclaimed wood.",
        category: "Furniture",
        price: 75,
        quantity: 2,
        condition: "Like New",
        material: "Wood",
        color: "Brown",
        dimensions: { length: 45, width: 45, height: 90 },
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80",
        owner: user._id,
      },
      {
        title: "Refurbished Laptop",
        description: "Fully refurbished laptop with 1-year warranty.",
        category: "Electronics",
        price: 299,
        quantity: 10,
        condition: "Good",
        brand: "Dell",
        model: "XPS 13",
        yearManufacture: 2021,
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80",
        owner: user._id,
      },
      {
        title: "Handmade Ceramic Plates",
        description: "Set of 4 handmade ceramic plates.",
        category: "Other",
        price: 45,
        quantity: 4,
        condition: "New",
        material: "Ceramic",
        color: "White",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80",
        owner: user._id,
      },
      {
        title: "Second-Hand Novel Collection",
        description: "A set of 10 pre-loved novels in excellent condition.",
        category: "Books",
        price: 20,
        quantity: 1,
        condition: "Like New",
        image: "https://images.unsplash.com/photo-1528209391280-6a6f2e6a2b2f?q=80",
        owner: user._id,
      }
    ];

    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log("Database seeded with sample products ✅");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit();
  }
}
