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

const consonants = 'bcdfghjklmnpqrstvwxyz'
const vowels = 'aeiou'

const pigLatin = (word) => {

  const fixedWord = word.toLowerCase().trim();
  // console.log(fixedWord)
  const letter1 = fixedWord.charAt(0);
  // console.log('first letter is: ' + letter1);
  const letter2 = fixedWord.charAt(1);
  // console.log('second letter is: ' + letter2);

  if (isConsonant(letter1)) {console.log('first letter is a consonant')
} else {console.log('first letter is a vowel')}

if (isConsonant(letter2)) {console.log('second letter is a consonant')
} else {console.log('second letter is a vowel')}

// isSimple(letter1,letter2)

if (isSimple(letter1,letter2)) {
// Convert word to array:
let simpleArray = fixedWord.split("");
// Remove the first letter of the word:
simpleArray = simpleArray.splice(0,1)
// Add first letter to the end and add "ay":
const simplePigArray = simpleArray.push(letter1,'ay');
// Convert array to string:
const simplePigWord = simplePigArray.toString();

console.log(simplePigWord)
}
}

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
    } else {console.log('the word is not simple')}
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
