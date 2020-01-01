'use strict';

function double_to_one(collection) {
  function flatten(arr, result = []) {
    for (let item of arr) {
        if (Array.isArray(item))
            flatten(item, result)
        else
            result.push(item)
    }
    return result
  }
  function inArray(search,array){
    for(var i in array){
      if(array[i]===search){
      return true;
        }
    }
    return false;
  }
  var arr = flatten(collection);
  var newArr = [];
  for(let i=0;i<arr.length;i++){
    if(!inArray(arr[i], newArr)){
      newArr.push(arr[i])
    }
  }
  return newArr
}

module.exports = double_to_one;
