'use strict';

function hybrid_operation(collection) {
  collection.splice(0,0,0);//首位插入0
  var hybrid = collection.reduce(function(prv,cur){
    return prv+(cur*3+2);
  })
  return hybrid;
}

module.exports = hybrid_operation;

