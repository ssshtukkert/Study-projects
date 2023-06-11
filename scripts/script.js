const options = ['Stone', 'Paper', 'Scissors'];
let opponentHero = [];
let playerHero = [];
var opponent = '';

document.addEventListener("DOMContentLoaded", ready);

function ready(){
    document.getElementById("rules").style.visibility = 'visible';
}
class Stone{
    constructor(name, wins, looses){
        this.name = name;
        this.wins = wins;
        this.looses = looses;
    }
}
class Scissors{
    constructor(name, wins, looses) {
        this.name = name;
        this.wins = wins;
        this.looses = looses;
    }
}
class Paper{
    constructor(name, wins, looses) {
        this.name = name;
        this.wins = wins;
        this.looses = looses;
    }
}



function createClass(){
    let playerHero = [];
    if (document.getElementById('input').value == 'Камень'){
        playerHero = new Stone("Камень", "Ножницы", "Бумага");
        chooseOpponent(playerHero);
    }
    if (document.getElementById('input').value == 'Ножницы'){
        playerHero = new Scissors("Ножницы", "Бумага", "Камень");
        chooseOpponent(playerHero);
    }
    if (document.getElementById('input').value == 'Бумага'){
        playerHero = new Paper("Бумага", "Камень", "Ножницы");
        chooseOpponent(playerHero);
    }
    else{
        document.getElementById('result').innerHTML = `Проверьте, правильно ли вы ввели данные`;
    }

    document.getElementById('yourChoice').innerHTML = `${playerHero.name}`;
    
}

function chooseOpponent(playerHero){
    let opponent = '';
    let computerChoice = Math.floor(Math.random() * options.length);
    opponent =  options[computerChoice];
    createOpponent(opponent, playerHero);
}

function createOpponent(opponent, playerHero){
    let opponentHero = [];
    if (opponent == "Stone"){
        opponentHero = new Stone("Камень", "Ножницы", "Бумага");
    }
    else if (opponent == "Scissors"){    
        opponentHero = new Scissors("Ножницы", "Бумага", "Камень");
    }
    
    else if (opponent == "Paper"){
        opponentHero = new Paper("Бумага", "Камень", "Ножницы");
    }   

    document.getElementById('oppChoice').innerHTML = `${opponentHero.name}`;

    defineTheWinner(opponentHero, playerHero);
}

function defineTheWinner(opponentHero, playerHero){
    if (playerHero.name == "Камень"){
            if (opponentHero instanceof Paper){
                document.getElementById('result').innerHTML = `Вы проиграли`;
            }
            else if (opponentHero instanceof Scissors){
                document.getElementById('result').innerHTML = `Вы выиграли`;
            }
            else{
                document.getElementById('result').innerHTML = `Ничья`;
            }
        }
    else if (playerHero.name == "Ножницы"){
            if (opponentHero instanceof Stone){
                document.getElementById('result').innerHTML = `Вы проиграли`;
            }
            else if (opponentHero instanceof Paper){
                document.getElementById('result').innerHTML = `Вы выиграли`;
            }
            else{
                document.getElementById('result').innerHTML = `Ничья`;
            }
    }
    else if (playerHero.name == "Бумага"){
            if (opponentHero instanceof Scissors){
                document.getElementById('result').innerHTML = `Вы проиграли`;
            }
            else if (opponentHero instanceof Stone){
                document.getElementById('result').innerHTML = `Вы выиграли`;
            }
            else{
                document.getElementById('result').innerHTML = `Ничья`;
            }
    }
}

function playAgain(){
    document.getElementById('yourChoice').innerHTML = "";
    document.getElementById('oppChoice').innerHTML = "";
    document.getElementById('result').innerHTML = "";
}

function cancel(){
    document.getElementById('gameBody').style.display = "none";
    document.getElementById('gameTitle').innerHTML = `Игра "Камень, ножницы, бумага" <br> Но Вы уже поиграли, пора за уроки :)`;
}


