'use strict';
function rank_by_two_large_one_small(collection){
  collection.sort(function(a,b){return a-b});
  var cool = [];
  const three = parseInt(collection.length/3);
  for(let i=0;i<three;i++){
    cool.push(collection[3*i+1]);
    cool.push(collection[3*i+2]);
    cool.push(collection[3*i]);
  }
  for(let i=0;i<collection.length%3;i++){
    cool.push(collection[3*three+i]);
  }
  return cool;
}

module.exports = rank_by_two_large_one_small;
