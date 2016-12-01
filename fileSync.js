// file sync...
var fs = require('fs');

// read in file Syncronously - not good as this will delay main thread...
var buffer = fs.readFileSync("animals.txt");
// convert to string
var bufferString = buffer.toString();

console.log("bufferString", bufferString);

var numberOfAnimals = bufferString.split("\n").length;
console.log("There are " + numberOfAnimals + " animals");

// wil only run this when the readFileSync is finished...
console.log("SOMETHING TO DO AT BOTTOM");