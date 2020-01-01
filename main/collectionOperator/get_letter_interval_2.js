'use strict';

function get_letter_interval_2(number_a, number_b) {
  //Helper Functions
  function toNum(a){
    var aSplit = a.split('');
    if(aSplit.length===1){
      return a.toLocaleLowerCase().charCodeAt(0) - 96;
    }
    else{
      var num = 0;
      aSplit.reverse();
      for(let i=0;i<aSplit.length;i++){
        var aNow = aSplit[i];
        num += (aNow.toLocaleLowerCase().charCodeAt(0) - 96)*(26**(i));
      }
      return num;
    }
  }

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

  //Real Codes
  if(number_b===number_a){
    return [toLetter(number_b)];
  }
  var interval = [];
  const big = Math.max(number_a,number_b);
  const small = Math.min(number_b,number_a);
  for(let i=small;i<=big;i++){
    interval.push(toLetter(i));
  }

  if(number_a<number_b){return interval;}
  if(number_b<number_a){return interval.reverse();}

}

module.exports = get_letter_interval_2;

