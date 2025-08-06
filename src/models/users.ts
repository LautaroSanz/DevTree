import mongoose, { Schema } from "mongoose";


export interface IUser{
    handle:String,
    name:String
    email:String
    password:String

}

//schema para mongodb
const userSchema= new Schema(
   {

    handle:{
        type: String,
        required: true,
        trim:true, //elimina espacios vacios
        lowercase:true,
        unique:true
    },

    name:{
        type: String,
        required: true,
        trim:true, //elimina espacios vacios
    },
    email:{
       type: String,
        required: true,
        trim:true,
        lowercase:true,
        unique:true
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