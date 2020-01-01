'use strict';

function choose_multiples_of_three(collection) {
  var newArray = collection.filter(function(x){
    return x%3=== 0;
  })
  return newArray;
}

module.exports = choose_multiples_of_three;
