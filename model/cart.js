import mongoose from "mongoose";
import {User} from "./user.js"
import {Product} from "./product.js"

const cartSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },

    items:[
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
        }
    }

    ]


})

export const cart = mongoose.model("Cart", cartSchema);