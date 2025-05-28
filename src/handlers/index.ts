import User from "../models/User"
 
export const createAccount=async (req,res)=>{ //usamos post para cifrado  de datos
    const user= new User(req.body)
    await user.save()
    res.send("registro creado correctamente")
}

