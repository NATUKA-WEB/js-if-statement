// extra hws

// #1

// Write an if/else statement with the following condition: If the variable age is greater than 18, output "Old enough", otherwise output "Too young"
var age = 16
if(age > 18) {
    console.log ("old enough")
} else if (age === 16) {
    console.log ("teenager")

}else{
    console.log("up to you")
}



// #2
//  compare two numbers. show the responding mesaage  if a is greater than, less then  or equal to b.

var l= 77
var r= 90
if (l > r ) {
    console.log("is greater than")
} else if (l = r) {
    console.log("equal to")
} else {
    console.log ("less than")
}

// # 3
// expected in output: 25 is between 0 and 50; 75 is between 51 and 100; 125 is greater than 100; -25 is less than 0

var x = 25
var y = 75 
var z = (x + y) < 125 
var t = - 25 


if (x < 50)  {
    console.log( "25 is between 0 and 50")
}
if (y >= x ) {
    console.log("75 is between 51 and 100")
}
if ( z > 100) {
    console.log("125 is greater than 100")
}
if (t < z ) {
    console.log("-25 is lesser than 0")
}


// #4 
// Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise ot should log "odd"

    let number = 60  //in case of space instead of 60 logs empty blank
    if  (number % 2 == 0) {
        console.log("even")
    } 
    if ( number % 2 ==1) {
        console.log("odd")
    }


//  function evenOrOdd (number) 
// if (number % 2 == 0) {
//     console.log("even")
// }
// if number % ==1) {
    // console.log("odd")
// }

