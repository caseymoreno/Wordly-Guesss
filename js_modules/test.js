import * as utilsWord from './utilWordLists.js';

const attemptDivs1 = document.querySelectorAll(".attempt-1 div");
const attemptDivs2 = document.querySelectorAll(".attempt-2 div");
const attemptDivs3 = document.querySelectorAll(".attempt-3 div");
const attemptDivs4 = document.querySelectorAll(".attempt-4 div");
const attemptDivs5 = document.querySelectorAll(".attempt-5 div");
const attemptDivs6 = document.querySelectorAll(".attempt-6 div");
const characterButtons = document.querySelectorAll(".letter-row button");
const userWordArr = [];
const deleteButton = document.querySelector(".delete-button");
const allAttemptDivs = [attemptDivs1, attemptDivs2, attemptDivs3, attemptDivs4, attemptDivs5, attemptDivs6];
let countAttempts = 0;
const randomWordToFind = utilsWord.getRandomWord().toLowerCase();
const resultsContainer = document.querySelector(".alert-result-container");
let endGame = false;

window.addEventListener("keydown", event => { 
    console.log(`Black: ${event.key}`);

    if(endGame){
        return;
    }else{
        let keyPressed = event.key;
        if (keyPressed == "Backspace"){
            removeTile(allAttemptDivs[countAttempts]);
        }
        else if (keyPressed == "Enter"){
            event.preventDefault();
            if (utilsWord.isValidWord(getUserWord())){
                console.log(`Game has been started with guess: ${getUserWord()}`);
                startGame(allAttemptDivs[countAttempts]);
                countAttempts++;
                topStck = -1;
            }
            else{
                divTileStyles.incorrectEnterStyle(allAttemptDivs[countAttempts]);
                setTimeout(toggleClass, 1000, allAttemptDivs[countAttempts]);
            }
        }
        else {
            if (utilsWord.isValidCharacter(keyPressed)){
                pushTile(keyPressed, allAttemptDivs[countAttempts]);
            }
            else{
                return;
            }
        }
    }
});


//Stack that removes and adds tiles in game
const MAXSIZE = 4;
let topStck = -1;

//Push letter into tile
const pushTile = (letterAdded, attemptDivs) => {
    if(topStck == MAXSIZE){
        console.log(`Stack is Full ${getUserWord}`);
        return getUserWord();
    }
    topStck++;
    userWordArr.push(letterAdded);
    divTileStyles.pushTileStlye(attemptDivs[topStck],letterAdded.toUpperCase());
    console.log(`Size of Stack: ${topStck}`);
    console.log(`Word so far: ${userWordArr}`);
}

//Remove letter from tile
const removeTile = (attemptDivs) =>{
    if(topStck == -1){
        console.log("Stack is Empty");matc
        return;
    }
    else{
        divTileStyles.removeTileStyle(attemptDivs[topStck]);
        userWordArr.pop();
        topStck--;
    }
    console.log(`Size of Stack: ${topStck}`);
}

//Clears userWordArr Stack
const clearWordStack = () =>{
    userWordArr.splice(0, userWordArr.length);
}
//converts userWordArr, which is the users guess, into a word
const getUserWord = () =>{
    let word = userWordArr.join("");
    return word.toLowerCase();
}

//Variable containing all the functions that add click event to letter buttons
const setCharacterButtons = {
    Qup:     function() { return "Q" },
    Wup:     function() { return "W"; },
    Eup:     function() { return "E"; },
    Rup:     function() { return "R"; },
    Tup:     function() { return "T"; },
    Yup:     function() { return "Y"; },
    Uup:     function() { return "U"; },
    Iup:     function() { return "I"; },
    Oup:     function() { return "O"; },
    Pup:     function() { return "P"; },
    Aup:     function() { return "A"; },
    Sup:     function() { return "S"; },
    Dup:     function() { return "D"; },
    Fup:     function() { return "F"; },
    Gup:     function() { return "G"; },
    Hup:     function() { return "H"; },
    Jup:     function() { return "J"; },
    Kup:     function() { return "K"; },
    Lup:     function() { return "L"; },
    enterup: function() {console.log("Enter was pressed"); return "enter";},
    Zup:     function() { return "Z"; },
    Xup:     function() { return "X"; },
    Cup:     function() { return "C"; },
    Vup:     function() { return "V"; },
    Bup:     function() { return "B"; },
    Nup:     function() { return "N"; },
    Mup:     function() { return "M"; }
}




const displayAttempt = (printAttemptArr, tilesArr) =>{
    for(let i = 0; i < printAttemptArr.length; i++){
        let currentLetterTile  = divTileStyles.findLetterToStyle(userWordArr[i].toUpperCase());
    
        if (printAttemptArr[i] == 'g'){
            tilesArr[i].style.backgroundColor = "#6aaa64";
            tilesArr[i].style.border = "2px solid #6aaa64";
            currentLetterTile.style.backgroundColor = "#6aaa64";
        }
        else if (printAttemptArr[i] == 'y'){
            tilesArr[i].style.backgroundColor = "#c9b458";
            tilesArr[i].style.border = "2px solid #c9b458";
            currentLetterTile.style.backgroundColor = "#c9b458";
        }
        else{
            tilesArr[i].style.backgroundColor = "grey";
            currentLetterTile.style.backgroundColor = "#c9b458";
        }
        tilesArr[i].style.color = "#FFF";
        currentLetterTile.style.color = "#FFF";
    }
}

function startGame(attemptDivs){
    let userGuess = getUserWord();

    let find = findIndex(randomWordToFind, userGuess);

    console.log(`Find Noob: ${find}`);
    console.log(`Index of Match Letter: ${find}`);

    let logf = printAttempt(find, userGuess, randomWordToFind);
    displayAttempt(logf, attemptDivs);
    if(userGuess == randomWordToFind){
        console.log("You Won! Game Over.");
        resultsContainer.style.display = "flex";
        endGame();
    }
    console.log(getUserWord());
    clearWordStack();
    
}


//Finds correct index if letter matches letter in game word
function findIndex(word, userWord){
    let match = [-1,-1,-1,-1,-1];
    
        let wordArr = Array.from(word);
        let guessArr = Array.from(userWord);
        let count = 0;
    
        for(let i = 0; i < 5; i++){
            //Exact Match
            if(wordArr[i] == guessArr[i]){
                guessArr[i] = '1';
                match[count] = i;
                count++;
            }
            else{
                for(let j = 0; j < 5; j++){
                    if(wordArr[i] == guessArr[j] && isAlreadyInArray(j, match)){
                        if(match[count] == -1){
                            match[count] = j;
                            count++;
                            break;
                        }   
                    }
                }
    
            }
        }
        console.log(`Match: ${match}`);
        return match;
    }
function printAttempt(attemptArr, guess, randomWord){
    let pop = ['*', '*', '*', '*', '*'];
    let guessArr = [...guess];
    let wordArr = [...randomWord];
    console.log(guessArr);
    console.log(wordArr);
    for(let i = 0; i < 5; i++){
        if(attemptArr[i] != -1){
            if(guessArr[attemptArr[i]] === wordArr[attemptArr[i]]){
                pop[attemptArr[i]] = 'g';
            }
            else{
                pop[attemptArr[i]] = 'y'
            }
        }
    }
    console.log(pop);
    return pop;
}
function isAlreadyInArray(num, nums){
    for(let i = 0; i < nums.length; i++){
        if(num == nums[i]){
            return false;
        }
    }
    return true;
}

let countRow = 0;

    for(const key in setCharacterButtons){
        let letter = setCharacterButtons[key]();
        characterButtons[countRow].setAttribute('onclick', `setCharacterButtons.${letter}up()`);
        characterButtons[countRow].onclick = setCharacterButtons[key];

        if(letter != "enter"){
            characterButtons[countRow].addEventListener('click', event => {
               pushTile(letter, allAttemptDivs[countAttempts]);
            });
        }
        else if(letter == "enter"){
            characterButtons[countRow].addEventListener('click', event => {
                if (utilsWord.isValidWord(getUserWord())){
                    console.log(`Game has been started with guess: ${getUserWord()}`);
                    startGame(allAttemptDivs[countAttempts]);
                    countAttempts++;
                    topStck = -1;
                }
            });
        }
        countRow++;
    }

    deleteButton.addEventListener('click', event => {
        removeTile(allAttemptDivs[countAttempts]);
    });

const divTileStyles = {
    pushTileStlye      : (divToBeStyled, letter) =>{
        divToBeStyled.innerHTML = letter;
        divToBeStyled.style.border = "2px solid grey";
    },
    removeTileStyle    : (divToBeStyled) =>{
        divToBeStyled.innerHTML = "";
        divToBeStyled.style.border  = "2px solid #d3d6da";
    },
    incorrectEnterStyle: (divToBeStyled) => {
        for (let i = 0; i < 5; i++){
            divToBeStyled[i].classList.toggle('shake-wrong');   
        }
    },
    findLetterToStyle : (letterToFind) =>{
        for(const letter of characterButtons){
            if(letterToFind == letter.innerHTML){
                console.log("Found");
                console.log(letter);
                return letter;
            }
        }
    }
}

function toggleClass(divs){
    for (let i = 0; i < 5; i++){
        divs[i].classList.toggle('shake-wrong');   
    }
}

