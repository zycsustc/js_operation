'use strict';

function average_uneven(collection) {
  var num = 0;
  var average = collection.reduce(function(prv,cur){
    if(cur%2!==0){
      num++;
      return prv+cur;
    }
    else{return prv;}
  },0)
  return average/num;
}

module.exports = average_uneven;
