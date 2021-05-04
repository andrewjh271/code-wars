// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

// We want to create a function that will add numbers together when called in succession.

// add(1)(2);
// // returns 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// and so on.

// A single call should return the number passed in.

// add(1); // 1
// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // 2
// addTwo + 5; // 7
// addTwo(3); // 5
// addTwo(3)(5); // 10
// We can assume any number being passed in will be valid whole number.

// function add(...args) {
//   return args.reduce((acc, el) => acc + el);
// }

function add(...args) {
  const nextFunction = (...args2) => add.apply(null, [...args, ...args2]);
  nextFunction.valueOf = () => args.reduce((acc, el) => acc + el);
  return nextFunction;
}

// add(1, 2, 4)(4) == 11 // true (type coercion)
// +add(3, 4, 5)(6)(7)(8, 9) // 42
// Number(add(3, 4, 5)(6)(7)(8, 9)) // 42
// add(3, 4, 5)(6)(7)(8, 9) + 5 // 47

// const addEleven = add(1, 2)(3, 5);
// +addEleven(4, 4)(13) // 32
// Number(addEleven) // 11
// +addEleven // 11