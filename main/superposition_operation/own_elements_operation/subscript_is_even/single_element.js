'use strict';
var single_element = function(collection){
  Array.prototype.notempty = function() {
        var arr = [];
        this.map(function(val, index) {
            if (val !== "" && val != undefined) {
                arr.push(val);
            }
        });
        return arr;
  }
  var even = collection.reduce(function(prv,cur,index){
      if((index+1)%2===0){prv.push(cur);}
      return prv;
  },[])
  var counts = even.reduce(function(prv,cur){
      if(prv[cur]){
          prv[cur]++
      }
      else{prv[cur]=1;}
      return prv;
  },{})
  var keys = Object.keys(counts);
  for(let i=0;i<keys.length;i++){
      if(counts[keys[i]]>1){
          for(let j=0;j<counts[keys[i]];j++){
            delete even[even.indexOf(Number(keys[i]))]
          }
  }}
  return even.notempty();
  };
module.exports = single_element;
