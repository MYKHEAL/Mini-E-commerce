import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    firstName:{
        type: String,
        required: true,
        trim: true,
        
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },

    phoneNumber:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\d{11}$/, 'Please fill a valid phone number']
    },

    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address']
    },
    
    password:{
        required: true,
        type: String,
        trim: true,
        minLength: [6, 'Password must be at least 6 characters long']
    },
    role:{
        tyoe: String,
        enum: ["buyer", "seller", "admin"],
    }
})

export const User = mongoose.model("User", userSchema);