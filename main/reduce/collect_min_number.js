'use strict';

function collect_min_number(collection) {
  var min = collection.reduce(function (prev, cur) {
    return Math.min(prev,cur);
  });
  return min;
}

module.exports = collect_min_number;

