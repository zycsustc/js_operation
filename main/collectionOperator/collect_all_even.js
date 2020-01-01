'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var even_array = [];
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2===0){
      even_array.push(collection[i])
    }
  }
  return even_array;
}

module.exports = collect_all_even;
