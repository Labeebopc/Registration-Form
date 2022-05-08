import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { RegistrationSchema } from "../models/registrationModel.js";


const Registration = mongoose.model('Registration', RegistrationSchema)

// Registration
export const addNewRegistration = async (req, res) => {

    req.body.password = await bcrypt.hash(req.body.password, 12)
    let newRegistration = new Registration(req.body)
  
    try {
        const existingUser = await Registration.findOne({ email: req.body.email })
        if (existingUser) {

            res.status(400).json({ message: "User Already Exists" })
        }
        if (!existingUser) {
            
            const newUser = await newRegistration.save()

            res.status(201).json({ success: true, newUser, message: "Account Successfuly Created" })
        }
        
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
        
    }

}

// Login

export const Login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ success: false, message: "Please provide email and password" })
    }

    try {
        const existingUser = await Registration.findOne({ email}).select("+password")
        if (!existingUser) {
            return res.status(404).json({ success: false, message: "Invalid Credentials" })
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(404).json({ success: false, message: "Invalid Credentials" })
        }
        // jwt token
        const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET_KEY )

        res.status(200).json({ result: existingUser, message: "Successfully Logged in" })


    } catch (error) {

        return res.status(500).json({ message: "Login Failed" })

    }


}

// jwt token verification

export const verifyToken = (req, res, next)=>{
    const headers = req.headers.authorization;
    console.log(headers);

    const token = headers.replace('Bearer ', '')
    if (!token) {
        return res.status(404).json({ success: false, message: "No Token Found" })
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
        if (err) {
            return res.status(400).json({ success: false, message: "Invalid Token" })
        }
        console.log(user.id);
        req.id = user.id;

    })
    next();

}

// get user

export const getUser = async (req, res)=>{
    const userId = req.id;
    let user;
    try {
        user = await newRegistration.findById(userId, '-password')
        
    } catch (error) {
       return res.status(400).json({ success: false})
        
    }
    if (!user) {
       return res.status(404).json({ success: false, message: "User Not Found" })
   }
   return res.status(200).json({ success: true, user })

}
