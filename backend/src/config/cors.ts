import { white } from 'colors'
import {CorsOptions} from 'cors'



export const corsConfig : CorsOptions ={
    origin: function(origin,callback){

        const whitelist=[process.env.FRONTEND_URL]

        if(process.argv[2]==='--api'){  //Permitimos a thunderclient mandar peticiones  de login    
            whitelist.push(undefined)
        }

        if (whitelist.includes(origin) ){
            callback(null,true)

        } else{
            callback(new Error('Error de CORS'))
        }
            
    }
}