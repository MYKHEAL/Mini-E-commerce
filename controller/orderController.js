import { Order } from "../model/order";

export const createOrder = async(req, res)=>{
    try{
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json({message: "Order created successfully", newOrder});
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const getOrders = async(req,res)=>{
    try{
        const {userId} = req.params;
        const orders = await Order.find({userId}.populate("products.product"));
        res.json(orders);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}