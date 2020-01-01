'use strict';

function even_to_letter(collection) {
  var even = [];
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2===0){
      even.push(String.fromCharCode(collection[i]+64).toLocaleLowerCase())
    }
  }
  return even;
}

module.exports = even_to_letter;
