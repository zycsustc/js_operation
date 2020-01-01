'use strict';

function calculate_elements_sum(collection, element) {
  collection.reverse();
  var last = collection.reduce(function(prev,cur){
    return collection.indexOf(element);
  })
  return collection.length-last-1;
}

module.exports = calculate_elements_sum;
