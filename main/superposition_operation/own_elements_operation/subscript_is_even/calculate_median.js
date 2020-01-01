'use strict';
var calculate_median = function(collection){
    var even = collection.reduce(function(prv,cur){
        if(cur%2===0){
            prv.push(cur);
        }
        return prv;
      },[])
    if(even.length%2!==0){
        return even[Math.floor(even.length/2)];
    }
    else{
        return (even[even.length/2-1]+even[even.length/2])/2;
    }
};

module.exports = calculate_median;
