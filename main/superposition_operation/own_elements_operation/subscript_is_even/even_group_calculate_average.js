'use strict';
var even_group_calculate_average = function(collection){
    function average(array){
          var sum = array.reduce(function(prv,cur){return prv+cur});
          return sum/array.length;
        }
    var arr = collection.reduce(function(prv,cur,index){
        if(cur%2===0 && (index+1)%2===0){
            prv.push(cur);
        }
        return prv;
    },[])
    if(!arr.length){return [0]};
    var g1 = [];
    var g2 = [];
    var g3 = [];
    for(let i=0;i<arr.length;i++){
        if(String(arr[i]).length===1){g1.push(arr[i])};
        if(String(arr[i]).length===2){g2.push(arr[i])};
        if(String(arr[i]).length===3){g3.push(arr[i])};
    }
    var result = [];
    if(g1.length){result.push(average(g1))};
    if(g2.length){result.push(average(g2))};
    if(g3.length){result.push(average(g3))};
    return result;
};

module.exports = even_group_calculate_average;
