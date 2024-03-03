loginInput = document.querySelector('.login-input')
loginBtn = document.querySelector('.login-btn')
form = document.querySelector('.login-form')

const verificarNomeSalvo = () => {
    const playerSalvo = localStorage.getItem('player')
    if(playerSalvo){
        loginInput.value = playerSalvo
        loginBtn.removeAttribute('disabled')
    }
};

const validarInput = ({ target }) => {
    if(target.value.length > 1){
        loginBtn.removeAttribute('disabled')
        return
    }
    loginBtn.setAttribute('disabled', '')
}

const handleSubmit = (e) =>{
    e.preventDefault()
    localStorage.setItem('player', loginInput.value);
    window.location = '../pages/game.html'
}

loginInput.addEventListener('input', validarInput)
form.addEventListener('submit', handleSubmit)
verificarNomeSalvo()