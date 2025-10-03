import {User} from "../model/user.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerUser = async(req, res) =>{
    try{
        const {firstName, lastName, phoneNumber, email, password, role} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message: "User already exists with this email"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            firstName, lastName, phoneNumber, email, password: hashedPassword, role
        })
        res.status(201).json({message: "User registered successfully", 
            user:{
                id: user._id,
                role: user.role,
            }});
    

    }catch(error){
  res.status(400).json({message: error.message});  
}
};




export const loginUser = async(req, res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user || user.password !== password){
            return res.status(404).json({message: "Invalid email or pasword"});
        }
        res.status(200).json({message: "Login successful", user});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}