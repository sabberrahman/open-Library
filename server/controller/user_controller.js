import { user } from "../model/user_model.js";
import mongoose from "mongoose";

export const signup = async (req,res)=>{
    try {
         const {fullname,email,password} = await req.body
    const findUser= await user.findOne({email}) 
    if (findUser) {
        res.status(400).json('user already exist')
    } 
    const createdUser= new user({
        fullname,
        email,
        password
    })
   await  createdUser.save();
    } catch (error) {
        console.log("error in server",error.message);
        res.status(500).json('internal server error ')
    }
   
}