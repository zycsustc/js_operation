'use strict';

function choose_no_repeat_number(collection) {
  var newArray = collection.filter(function(x, index){
    return collection.indexOf(x)===index;
  })
  return newArray;
}

module.exports = choose_no_repeat_number;
