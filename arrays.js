/** Javascript array methods */

var arrayOfObjects = [
    {name: 'Schuman', age: 34, employed: true},
    {name: 'John', age: 24, employed: true},
    {name: 'Jack', age: 35, employed: true},
    {name: 'Jess', age: 22, employed: true},
    {name: 'Joe', age: 14, employed: false},
    {name: 'Jill', age: 64, employed: false}
]

var arrayOfNumbers = [23, 45, 32, 654];
var arrayOfStrings = ['ue', 'we', 'pl', 'jk'];

//MAP: returns a new array with each element being the result of the callback function.
var newArray = arrayOfObjects.map(function(currentValue, index, array) {
    var rObj = {};
    rObj[currentValue.name] = 'new name';
    return rObj;
});

//newArray =  [ {Schuman: 'new name', age: 34, employed: true}...]
var newArray2 = arrayOfObjects.map(function(curretValue, index, array) {
    var val = curretValue * 2 * index;
    return val;
});

//EVERY: Checks if every/all elements in an array pass a test

var pass = arrayOfNumbers.every(function(item) {
    return item > 18;
})

//pass will be true;

//splice()
var newArray3 = arrayOfNumbers.splice(index, howMany, [element1][, ..., elementN]);

/*
The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object. 
2. The splice() method changes the original array and slice() method doesn't change the original array.
*/

/*
findIndex()	Returns the index of the first element in an array that pass a test
find()	    Returns the value of the first element in an array that pass a test
some()	    Checks if any of the elements in an array pass a test
*/

//FILTER: creates a new array with all elements that pass the test(returns true) implemented by the provided function
var newArray4 = arrayOfObjects.filter(function(element, index, array) {
    return element.age > 33;
})

//SORT: sorts the elements of an array in place and returns the array
var numbers = [4, 2, 5, 1, 3];

// If compareFunction is supplied, the array elements are sorted according to the return value of the compare function. 
//a and b are two elements being compared
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// [1, 2, 3, 4, 5]

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});


//REDUCE: applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
var sum = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 0);
// sum is 6

var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue, currentIndex, array) {
  return a + b;
}, initialValue);

