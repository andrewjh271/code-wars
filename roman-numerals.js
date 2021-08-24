// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

RomanNumerals = {
  romanKeys: {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  },

  toRoman: (number) => {
    let userNumber = number;
    let romanString = '';
    Object.entries(RomanNumerals.romanKeys)
          .sort((a, b) => b[1] - a[1])
          .forEach((element) => {
            const repetitions = Math.floor(userNumber / element[1]);
            for (let i = 0; i < repetitions; i++) {
              romanString += element[0];
              userNumber -= element[1];
            }
          })
    return romanString;
  },

  fromRoman: (roman) => {
    const numbers = roman.split('').map((el) => RomanNumerals.romanKeys[el]);
    let total = 0;
    for(let i = 0; i < numbers.length; i++) {
      if (numbers[i] < numbers[i + 1]) {
        total += (numbers[i + 1] - numbers[i]);
        i++;
      } else {
        total += numbers[i];
      }
    }
    return total;
  }
}
