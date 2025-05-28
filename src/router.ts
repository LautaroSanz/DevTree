import { Router } from 'express'
import {createAccount } from './handlers/index'
import {body} from 'express-validator'


const router=Router()

/**Autenticacion y registro */

router.post('/auth/register',
    body('handle').notEmpty().withMessage('El handle no puese ir vacio'),
     body('name').notEmpty().withMessage('El nombre no puese ir vacio'),
      body('email').isEmail().withMessage('Elemail debe ser valido'),
       body('password').isLength({min: 8}).withMessage('La contrasenia no puede ser menor a 8'),
    createAccount)
export default router