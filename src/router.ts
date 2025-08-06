import { Router } from "express";
import { body } from 'express-validator';
import { createAccount } from "./handlers";

const router=Router()

/**Auth y registro */

router.post('/auth/register', 
    
    body('handle')
    .notEmpty()
    .withMessage('El handle no puede ir vacio'),

    body('name')
    .notEmpty()
    .withMessage('El name no puede ir vacio'),

    body('email')
    .isEmail()
    .withMessage('Introduzca un email valido'),

    body('password')
    .isLength({min:8})
    .withMessage('El password debe ser mayor a 8 caracteres'),

    createAccount)

export default router