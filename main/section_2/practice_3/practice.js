function count_same_elements(collection) {
  var newArr = collection.reduce(function(prv, cur){
    
    if(cur in prv){
      prv[cur]++;
    }
    else if(cur.split('').length>1){
      if(cur[1]==='-'){
        if(cur[0] in prv){prv[cur[0]]+=Number(cur[2]);}
        else{prv[cur[0]] = Number(cur[2]);}
      }
      if(cur[1]===':'){
        if(cur[0] in prv){prv[cur[0]]+=Number(cur[2]);}
        else{prv[cur[0]] = Number(cur[2]);}
      }
      if(cur[1]==='['){
        var num=Number(cur.split('[')[1].split(']')[0]);
        if(cur[0] in prv){prv[cur[0]]+=num;}
        else{prv[cur[0]] = num;}
      }
    }
    else{
      prv[cur] = 1;
    }
    return prv;
  },{})
  var counts = [];
  keys = Object.keys(newArr);
  for(let i=0;i<keys.length;i++){
    var obj = {};
    obj['name'] = keys[i];
    obj['summary'] = newArr[keys[i]];
    counts.push(obj);
  }
  return counts;
}

module.exports = count_same_elements;
