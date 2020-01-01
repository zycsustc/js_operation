function collect_same_elements(collection_a, object_b) {
  var arrB = object_b.value;
  var newArray = collection_a.filter(function(x){
    if(arrB.indexOf(x)>=0){
      return true;
    }
  })
  return newArray;
}

module.exports = collect_same_elements;
