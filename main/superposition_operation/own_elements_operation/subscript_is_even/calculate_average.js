'use strict';
var calculate_average = function(collection){
  var even = collection.reduce(function(prv,cur){
    if(cur%2===0){
        prv.push(cur);
    }
    return prv;
  },[])
  var sum = even.reduce(function(prv,cur){
      return prv+cur;
  })
  return sum/even.length;
};

module.exports = calculate_average;
