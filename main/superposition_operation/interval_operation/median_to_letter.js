'use strict';

function median_to_letter(collection) {
  function toLetter(a){
    if(Number(a)===52){
      return 'az';
    }
    if(Number(a)<=26){
      return String.fromCharCode(Number(a)+64).toLocaleLowerCase();
    }
    else{
      var letter = '';
      var a1 = parseInt(Number(a)/26);
      var a2 = Number(a)%26;
      letter += String.fromCharCode(Number(a1)+64).toLocaleLowerCase();
      letter += String.fromCharCode(Number(a2)+64).toLocaleLowerCase();
      return letter;
    }
  }
  collection.sort(function(a,b){return a-b});
  return toLetter(collection[Math.ceil(collection.length/2)]);
}

module.exports = median_to_letter;
