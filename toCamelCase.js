function toCamelCase(str) {
  if(str.indexOf('-') != -1) return specifySymbol(str, '-');
  else if(str.indexOf('_') != -1) return specifySymbol(str, '_');
  else return str
}
function specifySymbol(str, symbol) {
  let newString = '';
  let tempString;
  nextSymbol = str.indexOf(symbol);
  while(nextSymbol !== -1) {
    tempString = str.slice(0, nextSymbol);
    if(!newString) newString = tempString;
    else newString += capitalize(tempString);
    str = str.slice(nextSymbol + 1);
    nextSymbol = str.indexOf(symbol);
  }
  newString += capitalize(str);
  return newString;
}
function capitalize(str) {
  newString = str.charAt(0).toUpperCase();
  newString += str.slice(1).toLowerCase();
  return newString;
}

/* Others' Solutions:

using String.prototype.replace(), Regular expressions (didn't really understand this)

*/