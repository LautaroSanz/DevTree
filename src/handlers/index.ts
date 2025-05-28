import type { Request, Response } from 'express'  //aplicamos inferencia par req,res asi evitamos type: any
import slug from 'slug'
import User from "../models/User"
import { hashPassword } from '../utils/auth';
import { validationResult } from 'express-validator';

export const createAccount=async (req : Request, res:Response)=>{ //usamos post para cifrado  de datos
    
    //manejar errores
    let errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({erorrs: errors.array()})
    }


    const {email, password}=req.body
    const userExists=await User.findOne({email})

    if(userExists) {
        const error=new Error('Email ya registrado')
        
        return res.status(409).json({error: error.message})
    }


    const handle= slug(req.body.handle,'')
    const handleExists=await User.findOne({handle})
    if(handleExists) {
        const error=new Error('Username ya registrado')
        
        return res.status(409).json({error: error.message})
    }


    const user= new User(req.body)
    user.password  = await hashPassword(password)
    user.handle = handle
    await user.save()
    return res.status(201).send("Registro creado correctamente")
}
