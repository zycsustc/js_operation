'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  function toLetter(a){
      return String.fromCharCode(Number(a)+64).toLocaleLowerCase();
  }
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

module.exports = get_letter_interval;
