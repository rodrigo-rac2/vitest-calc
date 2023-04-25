// Calculator library

// Add numbers in an array

function add(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

// Multiply numbers in an array

function multiply(array) {
    var product = 1;
    for (var i = 0; i < array.length; i++) {
        product *= array[i];
    }

    return product;
}

// Exports
module.exports = {
    add: add,
    multiply: multiply
}