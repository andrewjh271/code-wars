
const binaryArrayToNumber = arr => {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i] * 2 ** (arr.length - i - 1);
  }
  return total;
};





const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);