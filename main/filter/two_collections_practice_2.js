'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var newArray = collection_a.filter(function(x){
    if(collection_b.indexOf(x)<0){
      return true;
    }
  })
  return newArray;
}

module.exports = choose_no_common_elements;
