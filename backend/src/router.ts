import { Router } from 'express'
import {createAccount,login } from './handlers/index'
import {body} from 'express-validator'
import { handleInputErrors } from './middleware/validation'

const router=Router()

/**Autenticacion y registro */

router.post('/auth/register',
    body('email').isEmail().withMessage('El email debe ser valido'),
    body('password').isLength({min: 8}).withMessage('Password minimo de 8 caracteres'),

    handleInputErrors,
    createAccount)
export default router

router.post('/auth/login', 
    body('email').isEmail().withMessage('El email debe ser valido'),
    body('password').notEmpty().withMessage('Password Obligatorio'),
    handleInputErrors,
    login)