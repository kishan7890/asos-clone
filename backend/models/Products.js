const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    imgsrc:String,
    title:String,
    category:String,
    price:Number,
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = {ProductModel}
