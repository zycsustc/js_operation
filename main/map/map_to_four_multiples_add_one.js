'use strict';
var map_to_four_multiples_add_one = function(collection){
  var fourplus1 = collection.map(x=>x*4+1);
  return fourplus1;
};
module.exports = map_to_four_multiples_add_one;
