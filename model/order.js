import mongoose from "mongoose";
import { User } from "./user";
import { Product } from "./product";

const orderSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    products:[
            {
            product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
            },

    quantity:{
        type: Number,
        required: true,
        min: [1, 'Quantity cannot be less than 1']
    },

    price:{
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative']
    }


    }
],

    status:{
        type: String,
        enum: ["pending", "shipped", "delivered", "cancelled"],
        default: "pending"
    }
})

export const Order = mongoose.model("Order", orderSchema);