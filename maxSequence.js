var maxSequence = function(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    let localMax = arr[i];
    let currentTotal = localMax;
    for(let j = i + 1; j < arr.length; j++) {
      currentTotal += arr[j]
      if(currentTotal > localMax) localMax = currentTotal;
    }
    if(localMax > max) max = localMax;
  }
  return max; 
}


function addBinary(a,b) {
  return (a+b).toString(2);
}