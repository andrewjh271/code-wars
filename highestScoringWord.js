// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let max = 0, maxIndex = 0;
  const wordArray = x.split(' ');
  wordArray.forEach((word, index) => {
    wordScore = score(word);
    if(wordScore > max) {
      max = wordScore;
      maxIndex = index;
    }
  })
  return wordArray[maxIndex];
}

function score(word) {
  return word.split('').reduce((score, char) => {
    return score += (char.charCodeAt() - 96)
  }, 0);
}