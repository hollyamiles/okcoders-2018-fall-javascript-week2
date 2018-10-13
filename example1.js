// var message = "This is statement"

// console.log(message + " " + 1);
// console.log(message + " " + 2);
// console.log(message + " " + 3);
// console.log(message + " " + 4);
// console.log(message + " " + 5);
// console.log(message + " " + 6);
// console.log(message + " " + 7);
// console.log(message + " " + 8);

// var number = 1;

// Demonstrate how to use loop
//  while(number <= 8){
//      console.log( message + " " +number);
//      number = number + 1;
//     number++;
// }

// var message = " Bottles of beer on the wall, take one down, pass it around,"
// var message2= " bottles of beer on the wall."

// var number = 100;

// while(number >0){
//     console.log(number + message + (number-1) + message2);
//     number--
// }

for(var num =99; num > 0; num--){
    console.log(num + " Bootles of beer on the wall");
    console.log(num + " Bottles of beer");
    console.log(" Take one down, pass it around");
    if ( (num -1) != 0){
        console.log((num -1) + " Bottles of beer on the wall");
        } else {
            console.log ("No more bottels of beer on the wall");
        }
        console.log("");
}