'use strict';

function compare_collections(collection_a, collection_b) {
  var flag = collection_a.reduce(function (index) {
    if(collection_a[index]===collection_b[index]){
      return true;
    }
    else{return false}
  });
  return flag;
}

module.exports = compare_collections;


