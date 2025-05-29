import { Router } from 'express'
import {createAccount,getUser,login } from './handlers/index'
import {body} from 'express-validator'
import { handleInputErrors } from './middleware/validation'
import { authenticate } from './handlers/auth';

const router=Router()

/**Autenticacion y registro */

router.post('/auth/register',
    body('email').isEmail().withMessage('El email debe ser valido'),
    body('password').isLength({min: 8}).withMessage('Password minimo de 8 caracteres'),

    handleInputErrors,
    createAccount)


router.post('/auth/login', 
    body('email').isEmail().withMessage('El email debe ser valido'),
    body('password').notEmpty().withMessage('Password Obligatorio'),
    handleInputErrors,
    login)

router.get('/user', authenticate,getUser) 


export default router