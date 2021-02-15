
function persistence(num) {
  let count = 0;
  while(num > 9) {
    let tempString = num.toString(10);
    num = 1;
    for(let i = 0; i < tempString.length; i++) {
      num *= +tempString.charAt(i);
    }
    count++;
  }
  return count;
}


// Others' Solutions:


//Very cool:
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}


