'use strict';

function double_to_one(collection) {
  function flatten(arr, result = []) {
    for (let item of arr) {
        if (Array.isArray(item))
            flatten(item, result)
        else
            result.push(item)
    }
    return result
  }
  return flatten(collection);
}

module.exports = double_to_one;
