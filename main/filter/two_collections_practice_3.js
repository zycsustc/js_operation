'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var newArray = collection_a.filter(function(x){
    for(let i=0;i<collection_b.length;i++){
      if(x%collection_b[i]===0){
        return true
      }
    }
  })
  return newArray;
}

module.exports = choose_divisible_integer;
