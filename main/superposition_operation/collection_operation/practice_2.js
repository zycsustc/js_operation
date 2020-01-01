'use strict';

function hybrid_operation_to_uneven(collection) {
  var hybrid = collection.reduce(function(prv,cur){
    if(cur%2!==0){
      prv.push(cur*3+2)
    }
    return prv;
  },[])
  return hybrid;
}

module.exports = hybrid_operation_to_uneven;

