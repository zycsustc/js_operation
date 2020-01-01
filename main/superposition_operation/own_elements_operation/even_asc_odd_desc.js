'use strict';
var even_asc_odd_desc = function(collection){
  function flatten(arr, result = []) {
    for (let item of arr) {
        if (Array.isArray(item))
            flatten(item, result)
        else
            result.push(item)
    }
    return result
  }
  var even = collection.reduce(function(prv,cur){
    if(cur%2===0){
        prv.push(cur);
    }
    return prv;
  },[])
  var odd = collection.reduce(function(prv,cur){
    if(cur%2!==0){
        prv.push(cur);
    }
    return prv;
  },[])
  even.sort(function(a,b){return a-b});
  odd.sort(function(a,b){return b-a});
  return (flatten([even,odd]))
};

module.exports = even_asc_odd_desc;
