'use strict';

function average_to_letter(collection) {
  var average = collection.reduce(function(prv, cur){
    return prv+cur
  })
  average = Math.ceil(average/collection.length);
  return String.fromCharCode(average+64).toLocaleLowerCase()
}

module.exports = average_to_letter;

