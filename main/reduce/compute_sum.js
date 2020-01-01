'use strict';

function calculate_elements_sum(collection) {
  var sum = collection.reduce(function(prev,cur){
    return prev+cur;
  })
  return sum;
}

module.exports = calculate_elements_sum;

