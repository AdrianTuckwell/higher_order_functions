var fs = require("fs");

// Read File Asynchronously  - best method as it does not delay main thread...
fs.readFile("animals.txt", function(err, data){
  if(err){
    console.log("ERROR", err);
  }
  else{
    var bufferString = data.toString();
    console.log('bufferString', bufferString);
    var numberOfAnimals = bufferString.split("\n").length;
    console.log("There are " + numberOfAnimals + " animals");
  }

});

// main thread will get here before readFile is finished...
console.log("SOMETHING TO DO AT BOTTOM");