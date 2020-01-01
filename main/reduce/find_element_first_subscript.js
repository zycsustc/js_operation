'use strict';

function calculate_elements_sum(collection, element) {
  var first = collection.reduce(function(prev,cur){
    return collection.indexOf(element);
  })
  return first;
}

module.exports = calculate_elements_sum;

