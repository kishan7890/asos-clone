const {ProductModel} = require("../models/Products")


const createProduct = async(req , res)=>{
    try {
        const newProduct = new ProductModel(req.body)
        await newProduct.save();
        res.status(200).json({msg:"product created Successfully!"})
    } catch(error) {
        res.status(500).json({msg:"Internal server error", error})
    }
}

const getAllproducts = async(req,res)=>{
    try {
        const Products = await ProductModel.find()
        res.status(200).json(Products)
    } catch(error) {
        res.status(500).json({msg:"Internal server error", error})
    }
}


module.exports = {createProduct,getAllproducts};