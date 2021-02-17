// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

// https://www.codewars.com/kata/simple-encryption-number-1-alternating-split

function encrypt(text, n) {
  if(!text || n < 1) return text;
  let encryptedArray = text.split('');
  while(n--) {
    let evens = [], odds = [];
    encryptedArray.forEach((char, index) => {
      (index % 2 === 1) ? odds.push(char) : evens.push(char);
    })
    encryptedArray = odds.concat(evens);
  }
  return encryptedArray.join('');
}

function decrypt(encryptedText, n) {
  if(!encryptedText || n < 1) return encryptedText;
  let decryptedArray = encryptedText.split('');
  const midpoint = decryptedArray.length / 2
  while(n--) {
    let odds = decryptedArray.slice(0, midpoint);
    let evens = decryptedArray.slice(midpoint);
    decryptedArray = [];
    while(odds.length > 0) {
      decryptedArray.push(evens.shift(), odds.shift());
    }
    if(evens.length > 0) decryptedArray.push(evens.shift());
  }
  return decryptedArray.join('');
}