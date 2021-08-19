// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function permutations(userString) { 
  if (userString.length < 2) return [userString];
  let string = userString;
  const result = [];
  
  function rotate(start) {
    string = `${string.slice(0, start)}${string.slice(start + 1)}${string[start]}`;
    return string;
  }
  
  function doAnagram(size) {
    for (let i = 0; i < size; i++) {
      doAnagram(size - 1);
      if (size === 2) result.push(string);
      rotate(string.length - size);
    }
  }
  
  doAnagram(string.length);
  return [...new Set(result)];
}