
import { ValidationError, ConnectionError } from "./errors.js";
import { showUIPassedValidation } from "./showUIPassedValidation.js";

export const validationUser = ({ name, age, email } = {}) => {
    if (!name) throw new ValidationError('Name is required')

    if (!age) throw new ValidationError('Age is required')

    if (!email) throw new ValidationError('Email is required')

    //Llamar a la base de datos para guardar el usuario
    try {
        //mongodb.connect()
        throw new ConnectionError('database is nos available')
    } catch (err) {
        //enviar traza original a un servicio NUESTRO o lo que sea
        //sendBeaconError(err)
        console.log('ConnectionError')
        throw new ConnectionError('Database is nos available')
    }

    showUIPassedValidation()

} 