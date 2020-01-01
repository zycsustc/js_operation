'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var intersection = [];
  function inArray(search,array){
    for(var i in array){
      if(array[i]===search){
      return true;
        }
    }
    return false;
    }
    for(let i=0;i<collection_b.length;i++){
      if(inArray(collection_b[i], collection_a)){
        intersection.push(collection_b[i]);
      }
    }
    return intersection;
}

module.exports = get_intersection;
