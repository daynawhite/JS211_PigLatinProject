'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = document.getElementById('user-input')
const submitButton = document.getElementbyId('translateButton')
const translation = document.getElementById('translation')
const reset = document.getElementById('reset')

const consonants = 'bcdfghjklmnpqrstvwxyz'
const vowels = 'aeiou'

userInput.addEventListener('keyup', (event) => {
  input = event.target.value
})
submitButton.addEventListener('click', (trans => {
  let pWord = pigLatin(userInput)}))

reset.addEventListener('click', (clear) => {
  userInput.value = '';
  translation.innertext = ''
})

const pigLatin = (word) => {

  const fixedWord = word.toLowerCase().trim();
  // console.log(fixedWord)
  const letter1 = fixedWord.charAt(0);
  // console.log('first letter is: ' + letter1);
  const letter2 = fixedWord.charAt(1);
  // console.log('second letter is: ' + letter2);
  const letter3 = fixedWord.charAt(2);


// Convert word to array:
let myArray = fixedWord.split("");
console.log(myArray)

// Translate word that begins with a vowel:
// if (!isConsonant(letter1)) {
// myArray.push('yay');
// } 
// else

// Translate simple word:
if (isSimple(letter1,letter2)) {
  console.log('the word is simple')
// Remove the first letter of the word:
myArray.splice(0,1)
console.log(myArray)
// Add first letter to the end and add "ay":
myArray.push(letter1,'ay');
// console.log(myArray)
}
else
// Translate a complex word (begins with 2 or 3 consonants):
if (isComplex1(letter1, letter3)) {
  // console.log('the word starts with 2 consonants then a vowel')
  myArray.splice(0,2)
  myArray.push(letter1, letter2, 'ay')

} else if (isComplex2(letter1, letter3)) {
  // console.log('the word starts with 3 consonants')
  myArray.splice(0,3)
  myArray.push(letter1, letter2, letter3, 'ay')
} else {
  myArray.push('yay');
} 
// Convert array to word:
let answer = myArray.join("")
// console.log(myArray.join(""))
console.log(answer)
return answer
}
// end of "umbrella" translation function

  // Function to determine whether a letter is consonant.
  const isConsonant = (letter) => {
    for (let i = 0; i < consonants.length; i++) {
      if (letter === consonants[i]) 
        return true;
    } 
  }  

  // Determine if the word is simple: first letter consonant, second letter vowel.
  const isSimple = (firstLetter, secondLetter) => {
    if (isConsonant(firstLetter) && !isConsonant(secondLetter)) {
      // console.log('the word is simple')
      return true
    }
    //  else {console.log('the word is not simple')}
  }
//  Determine if the word is complex: begins with 2 or 3 consonants:
const isComplex1 = (firstLetter, thirdLetter) => {
  if (isConsonant(firstLetter) && !isConsonant(thirdLetter)) {
    return true
  } 
}
const isComplex2 = (firstLetter, thirdLetter) => {
  if ((isConsonant(firstLetter) && isConsonant(thirdLetter)) && (!thirdLetter == "y")) {
    return true
  }
}


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
