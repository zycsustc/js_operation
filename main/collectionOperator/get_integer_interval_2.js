'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  if(number_a===number_b){
    if(number_a%2===0){
      return [number_a];
    }
    else{
      return [];
    }
  }
  if(number_a<number_b){
    var interval = [];
    for(let i=number_a;i<=number_b;i++){
      if(i%2===0){
        interval.push(i);
      }
    }
    return interval;
  }
  if(number_a>number_b){
    var interval = [];
    for(let i=number_b;i<=number_a;i++){
      if(i%2===0){
        interval.push(i);
      }
    }
    return interval.reverse();
  }
}

module.exports = get_integer_interval_2;
