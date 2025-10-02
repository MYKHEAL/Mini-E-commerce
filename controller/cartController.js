import {Cart} from '../models/cartModel.js';

export const addToCart = async(req,res)=>{
    try{
        const {userId, productId, quantity} = req.body;
        const newCartItem = ({
            userId,
            items: productId,
            quantity
        });
        await newCartItem.save();
        res.status(201).json({message: "Product added to cart", newCartItem});  
        
    }catch(error){
        res.status(400).json({message: error.message});
    }
}



export const getCartItems = async(req,res)=>{
    try{
        const{userId}= req.params;
        const cartItems = await Cart.findOne({userId}).populate("items");
        res.json(cartItems);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}