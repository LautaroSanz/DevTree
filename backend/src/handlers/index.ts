import type { Request, Response } from 'express'  //aplicamos inferencia par req,res asi evitamos type: any
import slug from 'slug'
import User from "../models/User"
import { checkPassword, hashPassword } from '../utils/auth';
import { generateJWT } from '../utils/jwt';



export const createAccount=async (req : Request, res:Response)=>{ //usamos post para cifrado  de datos
    


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


export const login = async (req : Request, res : Response)=>{
    
    const {email, password}=req.body
    const user=await User.findOne({email})

    //check email 
    if(!user) {
        const error=new Error('Usuario no existe')
        
        return res.status(404).json({error: error.message})
    }

    //check password

    const isPasswordCorrect= await checkPassword(password,user.password)

    if(!isPasswordCorrect) {
        const error=new Error('Password Incorrecto')
        
        return res.status(401).json({error: error.message})
    }

    const token=generateJWT({id: user._id})

    return res.send(token)

}

export const getUser= async (req: Request,res:Response) =>{
     res.json(req.user)
}