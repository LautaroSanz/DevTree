import type { Request, Response, NextFunction } from 'express'
import User, { IUser } from '../models/User'


declare global{
    namespace Express{
        interface Request{
            user: IUser
        }
    }
}


export const authenticate = async (req:Request,res:Response,next : NextFunction)=>{
    

}