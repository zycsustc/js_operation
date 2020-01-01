'use strict';

function spilt_to_zero(number, interval) {
  var spilts = [number];
  while(true){
    spilts.push(Math.round((spilts[spilts.length-1]-interval)*10)/10);
    if(spilts[spilts.length-1]<=0){
      break;
    }
  }
  return spilts;
}

module.exports = spilt_to_zero;
