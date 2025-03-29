const express = require("express");

const {createProduct,getAllproducts} = require("../controllers/productController");

const productrouter = express.Router();

productrouter.post("/",createProduct);
productrouter.get("/",getAllproducts);

module.exports = productrouter;