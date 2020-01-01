'use strict';
var is_exist_element = function(collection,element){
  function inArray(search,array){
    for(var i in array){
        if(array[i]===search){
        return true;
        }
    }
    return false;
  }
  var even = collection.reduce(function(prv,cur,index){
    if(index%2===0){
        prv.push(cur);
    }
    return prv;
  },[])
  return inArray(element, even);
};

module.exports = is_exist_element;
