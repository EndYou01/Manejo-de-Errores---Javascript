import { ConnectionError, ValidationError } from "./errors.js";
import { showUIModalValidation } from "./showUIModalValidation.js";
import { validationUser } from "./validations.js";

document.querySelector('#submitBtn').addEventListener('click', (e) => {
    e.preventDefault()

    const name = document.querySelector('#Name').value
    const age = document.querySelector('#Age').value
    const email = document.querySelector('#Email').value

    try {
        validationUser({ name, age, email })
    } catch (err) {
        if (err instanceof ConnectionError) {
            showUIModalValidation(err)
            //retry after a few seconds
            setTimeout(() => {
                validationUser({ name, age, email })
            }, 2000)
        }

        if (err instanceof ValidationError) {
            showUIModalValidation(err)
        }
    }
})

