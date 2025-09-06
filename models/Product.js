const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, text: true },
  description: { type: String, required: true, trim: true },
  category: { 
    type: String, 
    required: true, 
    enum: ["Electronics", "Clothing", "Books", "Furniture", "Sports Equipment", "Other"], 
  },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, default: 1 },
  condition: { type: String, enum: ["New", "Like New", "Good", "Fair"] },
  yearManufacture: Number,
  brand: String,
  model: String,
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
  },
  weight: Number,
  material: String,
  color: String,
  originalPackaging: { type: Boolean, default: false },
  manualIncluded: { type: Boolean, default: false },
  workingCondition: String,

  image: { type: String, default: "/images/placeholder.png" },

  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

productSchema.index({ title: "text" });

module.exports = mongoose.model("Product", productSchema);
