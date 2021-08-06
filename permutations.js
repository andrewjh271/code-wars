// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

let string = '';
const result = [];

function permutations(userString) {
  string = userString;
  doAnagram(string.length);
  return result;
}

function rotate() {
  string = `${string.slice(1)}${string[0]}`
  return string;
}

function doAnagram(length) {
  if (length === 1) return;

  for (let i = 0; i < length; i++) {
    doAnagram(length - 1);
    if (length === 2) {
      result.push(string);
    }
    rotate();
  }
}