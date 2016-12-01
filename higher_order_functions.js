var thingWeWantToHappenLater = function(){
    console.log( "I waitied to run");
};
    
var anotherThingWeWantToHappenLater = function(){
    console.log( "also waited");
};
          // function, time to wait in ms
setTimeout(thingWeWantToHappenLater, 1000);
setTimeout(anotherThingWeWantToHappenLater, 2000);


console.log("a log at bottom of file")












// //something here...

// sleep ( 1000 );

// var myFunction = function(aFunction){
//   aFunction(99);


// };

// var anotherFunction = function( number){

//   console.log( number );
// };

// myFunction( anotherFunction );


