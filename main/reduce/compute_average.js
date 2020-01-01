'use strict';

function compute_average(collection) {
  var average = collection.reduce(function(prev,cur){
    return prev+cur;
  })
  return average/collection.length;
}

module.exports = compute_average;

