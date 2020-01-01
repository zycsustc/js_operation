function create_updated_collection(collection_a, object_b) {
  function inArray(search,array){
    for(var i in array){
      if(array[i]===search){
      return true;
        }
    }
    return false;
  }
  var newArr = collection_a.reduce(function(prv, cur){
    if(cur in prv){
      prv[cur]++;
    }
    else if(cur.split('').length>1){
      if(cur[1]==='-'){
        if(cur[0] in prv){prv[cur[0]]+=Number(cur[2]);}
        else{prv[cur[0]] = Number(cur[2]);}
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
    obj['key'] = keys[i];
    obj['count'] = newArr[keys[i]];
    counts.push(obj);
  }
  arrB = object_b.value;
  for(let i=0;i<counts.length;i++){
    if(inArray(counts[i].key, arrB)){
      counts[i].count=counts[i].count - parseInt(counts[i].count/3);
    }
  }
  return counts;
}

module.exports = create_updated_collection;
