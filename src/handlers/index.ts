import User from "../users"

import type { Request, Response } from "express"
import { hashPassword } from "../utils/auth"

export const createAccount = async (req: Request,res:Response)=>{    
    
    const {email,password} = req.body
    const userExists= await User.findOne({email})

    if (userExists){
        const error = new Error('Usuario ya registrado')
        return res.status(409).json({error:error.message})
        
    }
    
    const user = new User(req.body)
    user.password= await hashPassword(password)
    await user.save()

    res.status(201).send('Registrado con exito')
}

