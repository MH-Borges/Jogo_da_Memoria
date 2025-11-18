const block = document.querySelector('.block')
const grid = document.querySelector('.grid');
const timeValue = document.querySelector('.timer');
const moves = document.querySelector('.moves');
const spanPlayer = document.querySelector('.player').innerHTML = "Jogador: " +localStorage.getItem('player');
const dificuldade = document.querySelector('.Dificuldade');
const classes = document.querySelector('.Classes');
const hardPlus = document.querySelector('.dificilPlus');
const resetBtn = document.querySelector('.reset');


let valorWin = 0, seconds = 0, minutes = 0, movesCount = 0;
let firstCard = '', secondCard = '', classeEscolha = '';
let arrayCards = [], arrayCut = [];
let isTodos = false, isHardPlus = false;

const Reset = () => document.location.reload();
const Voltar = () => window.location = './index.html';


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
    setVariaveisClass('Cavaleiros');
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

    setVariaveisClass('Dragões');
    arrayCards = dragons;

}
const Paisagens = () =>{
    const paisagens = [
        'Bg01','Bg02','Bg03','Bg04','Bg05',
        'Bg06','Bg07','Bg08','Bg09','Bg10'
    ];

    setVariaveisClass('Paisagens');
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

    setVariaveisClass('Tudo junto e misturado');
    hardPlus.classList.remove('hide');
    isTodos = true;
    arrayCards = Tudo;
    
}


const Facil = () =>{
    arrayMix(5);
    EscolhasBox('Facil', '-3.1vh 0 0 0', '-2vh 0 0 0', 'green');
    setVariaveisDifi('2vw', '10vh 0 0 0', 10);
    loadGame(arrayCut);
}
const Medio = () =>{
    arrayMix(8);
    EscolhasBox('Medio', '-3.1vh 0 0 0', '0 0 0 0', 'yellow');
    setVariaveisDifi('2vw 3vw 1vw', '8vh 0 0 0', 16);
    loadGame(arrayCut);
    cardStyle('22vw','13vh','0.5vh 1.5vw','7vh 0 0 0','97vh -1vw 0 0', '10vw', '25vh', '0.5vw', '0');
}
const Dificil = () =>{

    arrayMix(10);
    EscolhasBox('Dificil', '-3vh 0 0 0', '-1vh 0 0 0', 'orange');
    setVariaveisDifi('1vw', '10vh 0 0 0', 20);
    loadGame(arrayCut);
    cardStyle('18vw','14vh','0.5vh 1vw','8vh 0 0 0','0', '9vw', '23vh', '0.5vw', '0');

}
const MuitoDificil = () =>{

    if(window.innerWidth < 767){
        let avisoCel = document.createElement('div');
        avisoCel.innerHTML = '<h2 style="font-size: 5vw; text-align: center; padding: 2vh 10vw 0; font-weight: 900;">Apenas Disponivel na versão Web</h2>';
        block.appendChild(avisoCel);
        
        setTimeout(() => {
            avisoCel.innerHTML = '';
        }, 2000);
        return;
    }

    arrayMix(45);
    EscolhasBox('Extremo', '0 0 0 0', '0 0 0 0', 'red');
    setVariaveisDifi('0.5vw', '10vh 0 0 0', 90);
    loadGame(arrayCut);

    block.style.width = '90vw';
    isHardPlus = true;
    cardStyle('0','0','0','0','0', '6vw', '13vh', '0.3vw', '0 6vw 0 0');

}


///////// Funçoes reutilizadas ///////

const setVariaveisClass = (nomeClass) =>{
    classeEscolha = nomeClass;
    dificuldade.classList.remove('hide');
    classes.classList.add('hide');
    isTodos = false;
}

const arrayMix = (quantItens) =>{
    
    for(i=0; i < quantItens || arrayCut.length < quantItens; i++ ){
        elemento = arrayCards[Math.floor(Math.random() * arrayCards.length)]
        if(arrayCut.indexOf(elemento) === -1){
            arrayCut.push(elemento);
        }
    }

}

const EscolhasBox = (dificuldade, escolhasMargin, btnMargin, corTxt) =>{
    dificuldadeEscolha = 'Facil';
    let escolhas = document.createElement('div');
    escolhas.innerHTML = 
    `
        <p>Classe: <span class="classeEscolha"> ${classeEscolha} </span></p>
        <p>Dificuldade: <span class="dificuldadeEscolha"> ${dificuldade} </span></p>
    `;
    escolhas.classList.add('escolhas');
    
    if(isTodos && window.innerWidth < 767){
        escolhas.style.margin = escolhasMargin;
        resetBtn.style.margin = btnMargin;
    }

    block.appendChild(escolhas);
    document.querySelector('.dificuldadeEscolha').style.color = corTxt;
}

const setVariaveisDifi = (padding, margin, valorGanha) =>{

    grid.classList.remove('hide');
    dificuldade.classList.add('hide');

    grid.style.padding = padding;
    grid.style.margin = margin;
    valorWin = valorGanha;
    interval = setInterval(timeGenerator, 1000);

}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const cardStyle = (widthC, heightC, marginC, marginGC, resetC, 
                    widthP, heightP, marginP, resetP) =>{

    let cards = document.querySelectorAll('.card');
    var cardArray = [...cards];
    cardArray.forEach(card => {
        
        if(window.innerWidth < 767){
            card.style.width = widthC;
            card.style.height = heightC;
            card.style.margin = marginC;
            grid.style.margin = marginGC;
            resetBtn.style.margin = resetC;
        }else{
            card.style.width = widthP;
            card.style.height = heightP;
            card.style.margin = marginP;
            resetBtn.style.margin = resetP;
        }

        if(isHardPlus){
            setTimeout(() => {
                card.classList.add('revelaCarta');
                setTimeout(() => {
                    card.classList.remove('revelaCarta');
                }, 5000);
            }, 200);
        }
        
    });

}

///////// Funçoes reutilizadas ///////


const timeGenerator = () => {
    seconds += 1;
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `Tempo: ${minutesValue}:${secondsValue}`;
}

const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = ` Movimentos: ${movesCount}`;
}

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
