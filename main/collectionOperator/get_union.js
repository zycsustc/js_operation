'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var union = collection_a;
  function inArray(search,array){
    for(var i in array){
      if(array[i]===search){
      return true;
        }
    }
    return false;
    }
    for(let i=0;i<collection_b.length;i++){
      if(!inArray(collection_b[i], collection_a)){
        union.push(collection_b[i]);
      }
    }
    return union;
}

module.exports = get_union;

