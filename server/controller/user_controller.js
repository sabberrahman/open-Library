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

    res.status(201).json('User created successfully!'); 
  } catch (error) {
    console.log("error in server", error.message);
    res.status(500).json('internal server error, fix it');
  }
};