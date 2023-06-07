

export const showUIModalValidation = (err) => {

    const errorText = document.createElement('div')
    const contenedorUI = document.querySelector('#UI')

    errorText.innerHTML = `<p class="validation-text error-text">${err.name} <br/> ${err.message}</p>`

    contenedorUI.children[0] && contenedorUI.removeChild(contenedorUI.children[0])
    contenedorUI.appendChild(errorText)

}

