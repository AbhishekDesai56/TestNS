'use strict'

class Words {
    constructor(wordOne, wordTwo) {
        this.wordOne = wordOne;
        this.wordTwo = wordTwo;
    }

    myWords(wordOne, wordTwo) {
        let myWordArray = [];
        myWordArray.push(wordOne);
        myWordArray.push(wordTwo);
        const firstLetter = myWordArray[0].slice(0, 1);
        console.log(`The shortest distance between these two words(${wordOne}, ${wordTwo}) in the list ${Math.abs(myWordArray[1].indexOf(firstLetter))}`);
    }
}

let myWordList = ["practice", "makes", "perfect", "coding", "makes", "coding"];
let count = 0, wordOne = "", wordTwo;
for (let index = 0; index < myWordList.length; index++) {
    count++;
    if (wordOne === "") {
        wordOne = myWordList[index];
    } else {
        wordTwo = myWordList[index];
    }
    if (count === 2) {
        let myWord = new Words(wordOne, wordTwo);;
        myWord.myWords(myWord.wordOne, myWord.wordTwo);
        count = 0;
        wordOne = "";

    }

}

let myWord = new Words("coding", "practice");
myWord.myWords(myWord.wordOne, myWord.wordTwo);


