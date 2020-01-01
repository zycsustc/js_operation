function count_same_elements(collection) {
  var newArr = collection.reduce(function(prv, cur){
    if(cur in prv){
      prv[cur]++;
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
  return counts;
}

module.exports = count_same_elements;
