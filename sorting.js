// var array = [10, 2, 5, 1, 9];

// function sortfunction(a, b){ //causes an array to be sorted numerically and ascending
//     return (a - b)
// }

// console.log(array.sort( sortfunction ));

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


// sort by name
var sorted = students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return b.age - a.age;
    // if (a.age < b.age) {
    //   return 1
    // } else if (a.age === b.age) {
    //   return 0
    // } else {
    //   return -1
    // }
 }
});

console.log(sorted);








