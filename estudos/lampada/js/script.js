// Minha primeira função: 
// var lampada = document.querySelector('#lampada')
// var lampadaContainer = document.querySelector('.lampada-container')
// console.log('funcionando')

// lampada.addEventListener('click',function(){
//     if(lampadaContainer.classList.contains('ligada')){
//         lampada.src = "img/lampada-apagada.png"
//         lampadaContainer.classList.remove('ligada')
             
//     }
//     else{
//         lampada.src = "img/lampada-acesa.png"
//         lampadaContainer.classList.add('ligada')
        
//     }  
// })


// Melhorado -----------------------------------------
const body = document.querySelector('body')
var lampada = {
    elemento: document.querySelector('#lampada'),
    ligado: false,
    toggle: function(){
        if(this.ligado){
            this.elemento.src = 'img/lampada-apagada.png'
            body.style.backgroundColor = 'var(--bg-dark)'
        }
        else{
            this.elemento.src = 'img/lampada-acesa.png'
            body.style.backgroundColor = 'var(--bg-ligth)'
        }
        this.ligado = !this.ligado
        console.log(body)
    }
}

lampada.elemento.addEventListener('click', function(){
    lampada.toggle()
})



// // estudo com chatGPT
// function criarLampada(id) {
//     var elemento = document.querySelector(`#${id}`);
    
//     var lampada = {
//         elemento: elemento,
//         imgLigado: elemento.getAttribute('data-img-ligado'),
//         imgDesligado: elemento.getAttribute('data-img-desligado'),
//         ligado: false,
//         toggle: function() {
//             this.ligado = !this.ligado;
//             this.elemento.src = this.ligado ? this.imgLigado : this.imgDesligado;
//         }
//     };

//     // Configurar a imagem inicial
//     lampada.elemento.src = lampada.imgDesligado;

//     lampada.elemento.addEventListener('click', function() {
//         lampada.toggle();
//     });

//     return lampada;
// }

// // Exemplo de uso
// var minhaLampada = criarLampada('lampada');

// // no html: <img id="lampada" data-img-ligado="img/lampada-acesa.png" data-img-desligado="img/lampada-apagada.png" alt="">