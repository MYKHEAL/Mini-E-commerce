import {Product} from "../model/product.js"

export const createProduct = async(req, res) =>{
    try{
        const newProduct = new product(req.body);
        await newProduct.save();
        res.status(201).json({message: "Product created successfully", newProduct});
    }catch (error){
        res.status(400).json({message: error.message});
    }
};

export const getAllProducts = async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}