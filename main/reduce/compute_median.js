'use strict';

function compute_median(collection) {
  var arr = collection;
  arr.sort(function(a,b){return a-b});
  if(arr.length%2===0){
    return (Number(arr[arr.length/2-1])+Number(arr[arr.length/2]))/2;
  }
  else{
    return arr[Math.floor(arr.length/2)];
  }
}

module.exports = compute_median;


