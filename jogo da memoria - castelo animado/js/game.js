const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const time = document.querySelector('.time')
const endGame = document.querySelector('.end-game-screen')

characters = [
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
    'card6',
    'card7',
    'card8',
    'card9',
    'card10',
]

const createElement = (tag, className) =>{
    const elemento = document.createElement(tag)
    elemento.className = className
    return elemento
}

let firstCard = ''
let secondeCard = ''
let counterPairs = 0

const checkEndGame = () =>{

    if (counterPairs == 10){
        clearInterval(this.loop)
        endGame.classList.remove('hidden')
    }
}

const checkCard = () => {
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondeCharacter = secondeCard.getAttribute("data-character")

    if (firstCharacter == secondeCharacter){
        firstCard = ''
        secondeCard = ''
        counterPairs += 1
        checkEndGame()


    } else {

        setTimeout(() =>{
            firstCard.classList.remove('reveal-card')
            secondeCard.classList.remove('reveal-card')
            firstCard = ''
            secondeCard = ''
        }, 500)
    }
}

const revealCard = ( { target } ) => {
    if(target.parentNode.className.includes('reveal-card')){
        return
    }

    if (firstCard == ''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    }
    else if(secondeCard == ''){
        target.parentNode.classList.add('reveal-card')
        secondeCard = target.parentNode

        checkCard()
    }
}

const creatCard = (character) =>{
    //criando as div's de card
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url(../img/${character}.jpg)`
    // reposicionando
    card.appendChild(front)
    card.appendChild(back)

    // adicionando atributo character
    card.setAttribute('data-character', character)

    card.addEventListener('click', revealCard)
    return card
}


const loadGame = () => {
    const duplicatecharacter = [ ...characters, ...characters ];

    const shuffliedArray = duplicatecharacter.sort(() => Math.random() - 0.5);

    shuffliedArray.forEach((character) => {      
        const card = creatCard(character)

        // adcionando carta ao grid:
        grid.appendChild(card)
    });
}

const startTime = () => {
    this.loop = setInterval(() => {
        const currentTime = Number(time.textContent)
        time.textContent = currentTime + 1
    }, 1000)
}

window.onload = () =>{
    const playerName = localStorage.getItem('player')
    spanPlayer.textContent = playerName
    startTime()
    loadGame()
}