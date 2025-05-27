import {Router} from 'express'

const router=Router()

/**Autenticacion y registro */

router.post('/auth/register', (req,res)=>{ //usamos post para cifrado  de datos
    console.log(req)

})

export default router