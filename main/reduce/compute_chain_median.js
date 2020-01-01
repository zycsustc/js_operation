'use strict';

function compute_chain_median(collection) {
  var arr = collection.split('->');
  arr.sort(function(a,b){return a-b});
  if(arr.length%2===0){
    return (Number(arr[arr.length/2-1])+Number(arr[arr.length/2]))/2;
  }
  else{
    return arr[Math.ceil(arr.length/2)];
  }
}

module.exports = compute_chain_median;
