var words = ["ground", "control", "to", "major", "tom"];

var map = function(array, callback) {
  var finalArray = []
  for (var i = 0; i < array.length; i++) {
    finalArray.push(callback(array[i]));
  }
  console.log(finalArray);
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});