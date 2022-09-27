const inputName = document.querySelector('.NomeJogador');
const BtnSubmit = document.querySelector('.BtnSubmit');
const form = document.querySelector('.Inicio');

const ValidateInput = ({ target }) => {
    if(target.value.length > 2){
        BtnSubmit.removeAttribute('disabled');
        return;
    }

    BtnSubmit.setAttribute('disabled', '');
}

const handleSubmit = (e) =>{
    e.preventDefault();

    localStorage.setItem('player', inputName.value);
    window.location = './Game.html';
}

inputName.addEventListener('input', ValidateInput);
form.addEventListener('submit', handleSubmit);