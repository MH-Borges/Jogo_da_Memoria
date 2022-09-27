const block = document.querySelector('.block')
const grid = document.querySelector('.grid');
const timeValue = document.querySelector('.timer');
const moves = document.querySelector('.moves');
const spanPlayer = document.querySelector('.player').innerHTML = "Jogador: " +localStorage.getItem('player');
const dificuldade = document.querySelector('.Dificuldade');
const classes = document.querySelector('.Classes');
const hardPlus = document.querySelector('.dificilPlus');

let valorWin = 0, seconds = 0, minutes = 0, movesCount = 0;
let firstCard = '', secondCard = '', classeEscolha = '', dificuldadeEscolha = '';

let arrayCards = []

const Cavaleiros = () =>{
    const characters = [
        'Astrid',
        'Bocao',
        'CabeçaDura',
        'CabeçaQuente',
        'Eret',
        'Melequento',
        'PernadePeixe',
        'Soluco',
        'Stoico',
        'Valka'
    ];

    classeEscolha = 'Cavaleiros';
    dificuldade.classList.remove('hide');
    classes.classList.add('hide');
    arrayCards = characters;

}
const Dragoes = () =>{

    const dragons = [
        'Banguela',
        'Batatao',
        'DentedeAnzol',
        'FuriadaLuz',
        'Gronkel',
        'Pulanuvem',
        'QuebraCranio',
        'TamborTrovao',
        'Tempestade',
        'Ziperarrepiante'
    ];

    classeEscolha = 'Dragões';
    dificuldade.classList.remove('hide');
    classes.classList.add('hide');
    arrayCards = dragons;

}
const Paisagens = () =>{

    const paisagens = [
        'Bg01','Bg02','Bg03','Bg04','Bg05',
        'Bg06','Bg07','Bg08','Bg09','Bg10'
    ];

    classeEscolha = 'Paisagens';
    dificuldade.classList.remove('hide');
    classes.classList.add('hide');
    arrayCards = paisagens;

}
const TodasClasses = () =>{

    const Tudo = [
        'Bg01','Bg02','Bg03','Bg04','Bg05',
        'Bg06','Bg07','Bg08','Bg09','Bg10',
        'Banguela',
        'Batatao',
        'DentedeAnzol',
        'FuriadaLuz',
        'Gronkel',
        'Pulanuvem',
        'QuebraCranio',
        'TamborTrovao',
        'Tempestade',
        'Ziperarrepiante',
        'Astrid',
        'Bocao',
        'CabeçaDura',
        'CabeçaQuente',
        'Eret',
        'Melequento',
        'PernadePeixe',
        'Soluco',
        'Stoico',
        'Valka',
        'Alpha',
        'AstridSoluco',
        'BanguelaAlpha',
        'BanguelaFuriaLuz',
        'BanguelaPuto',
        'BanguelaREALLY',
        'BanguelaStitch',
        'DragComeia',
        'Emblema',
        'Filhotes',
        'SolucoBanguela',
        'SolucoBanguela2',
        'SolucoFundo',
        'SolucoReiDragao',
        'TurmaToda'
    ];

    classeEscolha = 'Tudo junto e misturado';
    hardPlus.classList.remove('hide');
    dificuldade.classList.remove('hide');
    classes.classList.add('hide');
    arrayCards = Tudo;
}


const Facil = () =>{
    let arrayCut = [];
    for(i=0; i < 5 || arrayCut.length < 5; i++ ){
        elemento = arrayCards[Math.floor(Math.random() * arrayCards.length)]
        if(arrayCut.indexOf(elemento) === -1){
            arrayCut.push(elemento);
        }
    }

    dificuldadeEscolha = 'Facil';
    let escolhas = document.createElement('div');
    escolhas.innerHTML = 
    `
        <p>Classe: <span class="classeEscolha"> ${classeEscolha} </span></p>
        <p>Dificuldade: <span class="dificuldadeEscolha"> ${dificuldadeEscolha} </span></p>
    `;
    escolhas.classList.add('escolhas');
    

    block.appendChild(escolhas);
    document.querySelector('.dificuldadeEscolha').style.color = "green"
    grid.classList.remove('hide');
    dificuldade.classList.add('hide');
    valorWin = 10;
    interval = setInterval(timeGenerator, 1000);
    loadGame(arrayCut);
    

}

const Medio = () =>{

    let arrayCut = [];
    for(i=0; i < 8 || arrayCut.length < 8; i++ ){
        elemento = arrayCards[Math.floor(Math.random() * arrayCards.length)]
        if(arrayCut.indexOf(elemento) === -1){
            arrayCut.push(elemento);
        }
    }

    dificuldadeEscolha = 'Medio';
    let escolhas = document.createElement('div');
    escolhas.innerHTML = 
    `
        <p>Classe: <span class="classeEscolha"> ${classeEscolha} </span></p>
        <p>Dificuldade: <span class="dificuldadeEscolha"> ${dificuldadeEscolha} </span></p>
    `;
    escolhas.classList.add('escolhas');
    
    block.appendChild(escolhas);
    document.querySelector('.dificuldadeEscolha').style.color = "yellow"


    grid.classList.remove('hide');
    grid.style.padding = "2vw 3vw 1vw"
    grid.style.margin = "8vh 0 0 0"
    dificuldade.classList.add('hide');
    valorWin = 16;
    interval = setInterval(timeGenerator, 1000);
    loadGame(arrayCut);

    let cards = document.querySelectorAll('.card');
    var cardArray = [...cards];
    cardArray.forEach(card => {
        card.style.width = "10vw"
        card.style.height = "25vh"
        card.style.margin = "0.5vw"
    });

}

const Dificil = () =>{

    let arrayCut = [];
    for(i=0; i < 10 || arrayCut.length < 10; i++ ){
        elemento = arrayCards[Math.floor(Math.random() * arrayCards.length)]
        if(arrayCut.indexOf(elemento) === -1){
            arrayCut.push(elemento);
        }
    }

    dificuldadeEscolha = 'Dificil';
    let escolhas = document.createElement('div');
    escolhas.innerHTML = 
    `
        <p>Classe: <span class="classeEscolha"> ${classeEscolha} </span></p>
        <p>Dificuldade: <span class="dificuldadeEscolha"> ${dificuldadeEscolha} </span></p>
    `;
    escolhas.classList.add('escolhas');
    
    block.appendChild(escolhas);
    document.querySelector('.dificuldadeEscolha').style.color = "orange"

    grid.classList.remove('hide');
    grid.style.padding = "1vw"
    dificuldade.classList.add('hide');
    valorWin = 20;
    interval = setInterval(timeGenerator, 1000);
    loadGame(arrayCut);

    let cards = document.querySelectorAll('.card');
    var cardArray = [...cards];
    cardArray.forEach(card => {
        card.style.width = "9vw"
        card.style.height = "23vh"
        card.style.margin = "0.5vw"
    });
}

const MuitoDificil = () =>{

    let arrayCut = [];
    for(i=0; i < 45 || arrayCut.length < 45; i++ ){
        elemento = arrayCards[Math.floor(Math.random() * arrayCards.length)]
        if(arrayCut.indexOf(elemento) === -1){
            arrayCut.push(elemento);
        }
    }

    dificuldadeEscolha = 'Extremo';
    let escolhas = document.createElement('div');
    escolhas.innerHTML = 
    `
        <p>Classe: <span class="classeEscolha"> ${classeEscolha} </span></p>
        <p>Dificuldade: <span class="dificuldadeEscolha"> ${dificuldadeEscolha} </span></p>
    `;
    escolhas.classList.add('escolhas');
    
    block.appendChild(escolhas);
    document.querySelector('.dificuldadeEscolha').style.color = "red"


    grid.classList.remove('hide');
    grid.style.padding = "0.5vw"
    dificuldade.classList.add('hide');
    valorWin = 20;
    interval = setInterval(timeGenerator, 1000);
    loadGame(arrayCut);

    let cards = document.querySelectorAll('.card');
    var cardArray = [...cards];
    cardArray.forEach(card => {
        card.style.width = "4vw"
        card.style.height = "10vh"
        card.style.margin = "0.3vw"
        setTimeout(() => {
            card.classList.add('revelaCarta');
            setTimeout(() => {
                card.classList.remove('revelaCarta');
            }, 5000);
        }, 200);
        

    });



}



const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const timeGenerator = () => {
    seconds += 1;
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `Tempo: ${minutesValue}:${secondsValue}`;
};

const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = ` Movimentos: ${movesCount}`;
};

const checkFinalJogo = () =>{
    const disabledCartas = document.querySelectorAll('.disabledCartas');

    if(disabledCartas.length === valorWin){

        setTimeout(() => {
            block.innerHTML = 
            `
            <div class="win">
                <h2>Parabéns, ${localStorage.getItem('player')}!</h2>
                <p>Você concluiu o jogo em: ${minutes} Minutos e ${seconds} Segundos</p>
                <p>E fez o total de ${movesCount} Movimentos</p>
                <button onclick="Reset()">Jogar Novamente</button>
                <button onclick="Voltar()">Voltar</button>
            </div>
            `
        }, 1000);
        
    }
}

const checkCartas = () =>{
    const fisrtCharac = firstCard.getAttribute('data-character');
    const secondCharac = secondCard.getAttribute('data-character');

    if(fisrtCharac === secondCharac){

        setTimeout(() => {
    
            firstCard.firstChild.classList.add('disabledCartas');
            secondCard.firstChild.classList.add('disabledCartas');
        
            firstCard = '';
            secondCard = '';

            movesCounter();
            checkFinalJogo();
      
          }, 500);
        
    } else {
        setTimeout(() => {
    
          firstCard.classList.remove('revelaCarta');
          secondCard.classList.remove('revelaCarta');
          firstCard = '';
          secondCard = '';

          movesCounter();
    
        }, 500);
      }
}

const relevaCarta = ({ target }) => {

    if(target.parentNode.className.includes('revelaCarta')){
        return;
    }

    if(firstCard === ''){
        target.parentNode.classList.add('revelaCarta');
        firstCard = target.parentNode;

    }
    else if(secondCard === '') {
        target.parentNode.classList.add('revelaCarta');
        secondCard = target.parentNode;

        checkCartas();
    }

}

const createCard = (item) => {
    
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('./Imgs/${item}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', relevaCarta);
    card.setAttribute('data-character', item);
    
    return card;
}

const loadGame = (items) => {
    
    const duplicateCharacters = [ ...items, ...items ];
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((item) => {

        const card = createCard(item);
        grid.appendChild(card);

    });

}

const Reset = () => document.location.reload();

const Voltar = () => window.location = './MemoryGame.html';