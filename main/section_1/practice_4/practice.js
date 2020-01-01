function collect_same_elements(collection_a, object_b) {
  var arrA = [];
  for(let i=0;i<collection_a.length;i++){
    arrA.push(collection_a[i].key);
  }
  collection_b = object_b.value;
  var newArray = arrA.filter(function(x){
    if(collection_b.indexOf(x)>=0){
      return true;
    }
  })
  return newArray;
}

module.exports = collect_same_elements;
