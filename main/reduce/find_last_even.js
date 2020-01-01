'use strict';

function find_last_even(collection) {
  var temp = 0;
  var even = collection.reduce(function(prev, cur){
    if(cur%2===0){
      return prev.concat(cur)
    }
    else{return prev;}
  },[])
  return even[even.length-1];
}

module.exports = find_last_even;
