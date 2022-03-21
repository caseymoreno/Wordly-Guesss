function startGame(){
    let userGuess = "sleep";

    let find = findIndex(userGuess, "slate");

    console.log(`Index of Match Letter: ${find}`);

    printAttempt(find, userGuess, "slate");
}
startGame();


function findIndex(userWord, randomWord){
    let indexArr = [-1,-1,-1,-1,-1];
    let count = 0;

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(userWord.charAt(j)==randomWord.charAt(i) && isAlreadyInArray(j, indexArr)){
                indexArr[count] = j;
                count++;
            }
        }
    }
    return indexArr;
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
}



//printWordsInList();
function duplicates(nums){
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j < nums.length - 1; j++){
            if(nums[i]==nums[i+1]){
                return false;
            }
        }
    }
    return true;
}
function isAlreadyInArray(num, nums){
    for(let i = 0; i < nums.length; i++){
        if(num == nums[i]){
            return false;
        }
    }
    return true;
}

