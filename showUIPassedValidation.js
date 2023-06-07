


export const showUIPassedValidation = () => {
    
    const passedText = document.createElement('div')
    const contenedorUI = document.querySelector('#UI')

    passedText.innerHTML = `<p class="validation-text passed-text">PASSED</p>`

    contenedorUI.appendChild(passedText)

}

