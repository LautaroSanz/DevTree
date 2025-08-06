import mongoose, { Schema } from "mongoose";


export interface IUser{
    name:String
    email:String
    password:String

}

//schema para mongodb
const userSchema= new Schema(
   {
    name:{
        type: String,
        required: true,
        trim:true, //elimina espacios vacios
    },
    email:{
       type: String,
        required: true,
        trim:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
        trim:true
    },
   } 
) 

const User= mongoose.model<IUser>('User',userSchema)

export default User