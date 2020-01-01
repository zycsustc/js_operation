'use strict';
function one_add_next_multiply_three(collection){
  var next = collection.reduce(function(prv,cur,index,arr){
    prv.push((cur+arr[index+1])*3);
    return prv;
  },[])
  return next.splice(0,next.length-1);
}

module.exports = one_add_next_multiply_three;
