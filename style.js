const word = "PUSES";
const userGuess = "APPLE";
let match = [
    [-1, 'b'],
    [-1, 'b'],
    [-1, 'b'],
    [-1, 'b'],
    [-1, 'b']
];
function findIndex(word, userWord){
    let match = [-1,-1,-1,-1,-1];

    let wordArr = Array.from(word);
    let guessArr = Array.from(userWord);
    let count1 = 0;

    for(let i = 0; i < 5; i++){

        for(let j = 0; j < 5; j++){
            if(wordArr[i] == guessArr[j]){
                if(i == j){
                    match[count1] = j;
                    count1++;
                }

            }
        }
    }
    return match;
}

function findIndexNoob(word, userWord){
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
    return match;
}
function isAlreadyInArray(num, nums){
    for(let i = 0; i < nums.length; i++){
        if(num == nums[i]){
            return false;
        }
    }
    return true;
}
let kko = findIndexNoob(word, userGuess)
console.log(kko);


function getCountOfLetter(non, index){
    let letterArr = Array.from(non);
    let letter = letterArr[index];
   
    let count = 0;
    for(let i = 0; i < 5; i++){
        if(letter == letterArr[i]){
            count++;
        }
    }

    return count;
}

let characterRankings = [];
const ilt = typeof(characterRankings[2]) == "undefined";
console.log(ilt);