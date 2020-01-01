'use strict';

function amount_even(collection) {
  var sum = collection.reduce(function(prv,cur){
    if(cur%2===0){
      return prv+cur;
    }
    else{return prv;}
  },0)
  return sum;
}

module.exports = amount_even;
