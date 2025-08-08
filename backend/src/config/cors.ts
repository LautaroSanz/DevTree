import { CorsOptions } from "cors";


//Validacion para conexion cruzada 
//distintos servers de front y backend

export const corsConfig :CorsOptions={
    origin:function(origin,callback){
        if (origin===process.env.FRONTEND_URL){
            callback(null,true)
        } else {
            callback(new Error('Conexion restringida'))
        }
    }
}