function create_updated_collection(collection_a, object_b) {
  function inArray(search,array){
    for(var i in array){
      if(array[i]===search){
      return true;
        }
    }
    return false;
  }
  arrB = object_b.value;
  for(let i=0;i<collection_a.length;i++){
    if(inArray(collection_a[i].key, arrB)){
      collection_a[i].count = collection_a[i].count - parseInt(collection_a[i].count/3);
    }
  }
  return collection_a
}

module.exports = create_updated_collection;
