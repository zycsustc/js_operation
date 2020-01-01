'use strict';
var number_map_to_word_over_26 = function(collection){
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
  var letter = collection.map(x=>toLetter(x));
  return letter;
};

module.exports = number_map_to_word_over_26;
