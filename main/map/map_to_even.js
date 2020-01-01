'use strict';
function map_to_even(collection){
  var even = collection.map(x=>x*2);
  return even;
}

module.exports = map_to_even;
