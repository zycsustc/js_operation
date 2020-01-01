'use strict';

function hybrid_operation_to_uneven(collection) {
  collection.splice(0,0,0);//首位插入0
  var hybrid = collection.reduce(function(prv,cur){
    if(cur%2!==0){
      return prv+(cur*3+5);
    }
    else{return prv;}
  })
  return hybrid;
}

module.exports = hybrid_operation_to_uneven;

