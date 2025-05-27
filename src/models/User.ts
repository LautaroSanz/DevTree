import mongoose, {Schema} from 'mongoose'

const userSchema= new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    password:{
        type: String,
        required: true,
        trim: true

    }

})

const User=mongoose.model('User',userSchema)  //exportamos el modelo de user con mongoose
export default User