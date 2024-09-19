// Esta e suna forma que en express se jecuten antes del controlador que definimos en la ruta, basciamente son funci9n que se ejecutan en las peticiones http
import type {Request, Response, NextFunction} from 'express'
import {validationResult} from 'express-validator'

// Esta funcion en caso de fallar la validacion, detrena la ejecucion que no entre al controlador y mostrar los resultado, y la ponemos en un middleware para que sea reutilizable
export const handleInputErros = (req: Request, res: Response, next:NextFunction) =>{
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    next()
}