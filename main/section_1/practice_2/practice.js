function collect_same_elements(collection_a, collection_b) {
  function flatten(arr, result = []) {
    for (let item of arr) {
        if (Array.isArray(item))
            flatten(item, result)
        else
            result.push(item)
    }
    return result
  }
  collection_b = flatten(collection_b);
  var newArray = collection_a.filter(function(x){
    if(collection_b.indexOf(x)>=0){
      return true;
    }
  })
  return newArray;
}

module.exports = collect_same_elements;
