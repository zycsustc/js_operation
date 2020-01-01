'use strict';

function choose_even(collection) {
  //在这里写入代码
  var newArray = collection.filter(function(x){
    return x%2=== 0;
  })
  return newArray;
}

module.exports = choose_even;
