'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  if(number_b===number_a){
    return [number_b];
  }
  var interval = [];
  const big = Math.max(number_a,number_b);
  const small = Math.min(number_b,number_a);
  for(let i=small;i<=big;i++){
    interval.push(i)
  }
  if(number_a<number_b){return interval;}
  if(number_b<number_a){return interval.reverse();}
}

module.exports = get_integer_interval;

