import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number,
        required: true,
        trim: true,
        min: [0, 'Price cannot be negative']
    },

    stock:{
        type: Number,
        required: true,
        trim: true,
        min: [0, 'Stock cannot be negative']
    },

    category: {
        type: String,
        required: true,
        trim: true,
    }

})
export const Product = mongoose.model("Product", productSchema);