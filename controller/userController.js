import {User} from "../model/user.js"

export const registerUser = async(req, res) =>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json({message: "User registered successfully", user});

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