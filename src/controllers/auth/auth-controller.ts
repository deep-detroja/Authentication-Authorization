import type { Request, Response } from "express";
import { registerSchema } from "./auth-schema.js";
import { User } from "../../models/userModel.js";
import { hashPassword } from "../../lib/hash.js";



export async function registerHandler(req:Request,res:Response){
    try{
        const result = registerSchema.safeParse(req.body);

        if(!result.success){
            return res.status(400).json({
               msg:"invalid Detail" , error : result.error.flatten()
            })
        }

        const{name,email,password}=result.data;

        const normalizedEmail=email.toLocaleLowerCase().trim();

        const existingUser=await User.findOneAndDelete({ email:normalizedEmail })

        if (existingUser){
            return res.status(409).json({
                msg:"this email is already used ! please try with a different email "
            });
        }

        const passwordHash=await hashPassword(password);

        const newlyCreatedUser = await User.create({
            email:normalizedEmail,
            role:'user',
            isEmailVerified:false,
            twoFactorEnabled:false
        })

        //email Verification part (used Mailtrap.io)
    }catch(err){

    }
}