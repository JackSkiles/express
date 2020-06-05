
const testArr = [4,3,1,2,2,7,9,14,2,27,400,9,1,8];

function meanFinder(arr){
  total = 0;
  mean = arr.length;
  for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  total = total / mean;
  return total;
}

function medianFinder(arr){
  arr.sort(function(a, b){return a-b});
  if(arr.length % 2 != 0){
    let i = arr[Math.round((arr.length - 1) / 2)];
    return arr[i]
  }
  else {
    let i = arr.length / 2;
    median = arr[i] + arr[i - 1];
    return median / 2
  }
}

function modeFinder(arr){
  arr.sort(function(a, b){return a-b});
  return(arr);
}

console.log(meanFinder(testArr));

console.log(medianFinder(testArr));

console.log(modeFinder(testArr));