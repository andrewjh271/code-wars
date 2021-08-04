// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  return str.split(' ').map((word => (
    word.length === 1 && /[^A-Za-z]/.test(word) ? word : `${word.slice(1)}${word[0]}ay`
  ))).join(' ')
}