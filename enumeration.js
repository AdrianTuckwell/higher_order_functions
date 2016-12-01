// new array
var testArray = [1,2,3,4];



var ourForEach = function(array, callOnItem){
    for (var item of array){
        callOnItem("item", item);
    }
}

// ourForEach(testArray, function(item){console.log("item", item)});
ourForEach(testArray, console.log);


// Map example
var doubledArray = testArray.map( function(item){return item * 2});
console.log('doubledArray', doubledArray)

// sum the items on an array using reduce method
var sum = testArray.reduce(function(acc, item){ return acc + item }, 0);

console.log("sum", sum);


// forEach is just a function. just run this function on each of the members in the array. So 'for Each' 'item' print to the screen the item...
// testArray.forEach(function(item){
//  console.log("item", item)
// });





// // loop array and print to screen
// for (var item of testArray){
//   console.log('item', item);
// }
