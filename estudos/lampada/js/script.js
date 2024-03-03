var lampada = document.querySelector('#lampada')
var lampadaContainer = document.querySelector('.lampada-container')
console.log('funcionando')

lampada.addEventListener('click',function(){
    if(lampadaContainer.classList.contains('ligada')){
        console.log('tem')
        lampada.src = "img/lampada-apagada.png"
        lampadaContainer.classList.remove('ligada')
             
    }
    else{
        lampada.src = "img/lampada-acesa.png"
        lampadaContainer.classList.add('ligada')
        
    }

    
})