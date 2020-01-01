'use strict';

function grouping_count(collection) {
  var counts = {};
  for(let i=0;i<collection.length;i++){
    if(counts[collection[i]]){
      counts[collection[i]] += 1;
    }
    else{
      counts[collection[i]] = 1;
    }
  }
  return counts;
}

module.exports = grouping_count;
