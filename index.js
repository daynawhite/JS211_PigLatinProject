// GLOBAL VARIABLES FOR USE IN TRANSLATION FUNCTION:
const consonants = 'bcdfghjklmnpqrstvwxyz'
 // Determine whether a letter is consonant.
 const isConsonant = (letter) => {
  for (let i = 0; i < consonants.length; i++) {
    if (letter === consonants[i]) 
      return true;
  } 
}  


// const test = (firstLetter,secondLetter,thirdLetter) => {
//   if (!isConsonant(firstLetter)) {
//     console.log('the word starts with a vowel')
// }
// else 
// {if (!isConsonant(secondLetter)) {
//   console.log('the word is simple')
// }
// else {}
// }
// }

// Determine if a word starts with a vowel

// Determine if a word is simple: first letter consonant, second letter vowel or 'y'.
const isSimple = (firstLetter, secondLetter) => {
  if (isConsonant(firstLetter) && (!isConsonant(secondLetter) || secondLetter === 'y') ){
    return true
  }
}
//  Determine if a word begins with 2 consonants :
const twoConsStart = (firstLetter, secondLetter) => {
  if (isConsonant(firstLetter) && isConsonant(secondLetter) && !secondLetter==='y'
  // && (!isConsonant(thirdLetter) || thirdLetter==='y')
 ) {
  return true
} }

//  Determine if a word begins with 2 consonants then a vowel or "y"
const isComplex1 = (firstLetter, secondLetter, thirdLetter) => {
  if (twoConsStart(firstLetter,secondLetter) && !isConsonant(thirdLetter)) {
    return true
  }
}
// || thirdLetter==='y')
// //  Determine if a word is complex: begins with 3 consonants, not including 'y':
const isComplex2 = (firstLetter,secondLetter,thirdLetter) => {
  if (twoConsStart(firstLetter,secondLetter) && (isConsonant(thirdLetter) && !thirdLetter==='y')) {
   return true
  }
  }
// const isComplex2 = (firstLetter, thirdLetter) => {
//   if (isConsonant(firstLetter) && isConsonant(thirdLetter)) {
//   return true
// } }


// FUNCTION TO TRANSLATE WORD TO PIG LATIN:
function pigLatin(word) {

  const fixedWord = word.toLowerCase().trim();
  // console.log(fixedWord)
  const letter1 = fixedWord.charAt(0);
  console.log('first letter is: ' + letter1);
  const letter2 = fixedWord.charAt(1);
  console.log('second letter is: ' + letter2);
  const letter3 = fixedWord.charAt(2);
  console.log('third letter is: ' + letter3);

// Convert word to array:
let myArray = fixedWord.split("");
console.log(myArray)

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
 else if (!isConsonant(letter1)){
  myArray.push('yay');
 };
// Translate a complex word (begins with 2 or 3 consonants):
// if (twoConsStart) {console.log('the word starts with 2 consonants')}

if (isComplex1(letter1, letter2, letter3)) {
  console.log('the word starts with 2 consonants then a vowel or "y"')
  myArray.splice(0,2)
  myArray.push(letter1, letter2, 'ay')

} else if (isComplex2(letter1, letter2, letter3)) {
  console.log('the word starts with 3 consonants')
  myArray.splice(0,3)
  myArray.push(letter1, letter2, letter3, 'ay')
} 
// Convert new array to word:
let answer = myArray.join("")
// console.log(myArray.join(""))
// console.log(answer)
return answer
}
// END OF PIG LATIN TRANSLATION FUNCTION.

// Making it work with a client-side:
const userInputBox = document.getElementById('user-input')
const translateButton = document.getElementById('translateButton')
const translation = document.getElementById('translation')
const resetButton = document.getElementById('reset')

// Get the English word and assign it to the "userWord" variable
userInputBox.addEventListener('keyup', (event) => {
  userWord = event.target.value
  console.log(userWord)
})
  
// call the translation function when user clicks the submit button:
translateButton.addEventListener('click',(event)=>{
  event.preventDefault();
  let pWord = pigLatin(userWord);
  // Display the translated Pig Latin word to the user:
  translation.innerHTML = pWord
})

// Reset page function:
function clear() {
  document.getElementById('myForm').reset();
  userWord = '';
  translation.innerHTML = ''
}
// Event listener for reset button:
resetButton.onclick = clear



