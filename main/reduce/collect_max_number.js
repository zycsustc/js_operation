'use strict';

function collect_max_number(collection) {
  var max = collection.reduce(function (prev, cur) {
    return Math.max(prev,cur);
  });
  return max;
}

module.exports = collect_max_number;
