'use strict';

function find_first_even(collection) {
  var temp = 0;
  var even = collection.reduce(function(prev, cur){
    if(cur%2===0){
      return prev.concat(cur)
    }
    else{return prev;}
  },[])
  return even[0];
}
var test = [1,11,27,20,4,9,15];
console.log(find_first_even(test));
module.exports = find_first_even;

