import { user } from "../model/user_model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const findUser = await user.findOne({ email });
    if (findUser) {
      res.status(400).json('user already exists');
      return; 
    }
     const hashPassword = await bcryptjs.hash(password,10)
    const createdUser = new user({
      fullname,
      email,
      password: hashPassword
    });

    await createdUser.save();

    res.status(201).json({message:'User created successfully!', user:{
      _id: createdUser.id,
            fullname: createdUser.fullname,
            email:createdUser.email
    }}); 
  } catch (error) {
    console.log("error in server", error.message);
    res.status(500).json('internal server error, fix it');
  }
};

export const login =async (req,res)=>{
try {
    const {email,password}=req.body
    const foundUser= await user.findOne({email}) //body email search on DB and find that id that match
    const isPassword = await bcryptjs.compare(password, foundUser.password)
    if (!foundUser || !isPassword) {
       return  res.status(400).json("Invalid email or password")
    } else{
         res.status(200).json({message:"login succesfull", user:{
            _id: foundUser.id,
            fullname: foundUser.fullname,
            email:foundUser.email
        }})
    }
} catch (error) {
    console.log("error",error);
    res.status(500).json("something went wrong in server side")
}
}