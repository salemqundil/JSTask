//Basic

//1-Check if a variable named "age" is greater than 18 and display a message "You are an 
// adult" if it is.

var age = 27;
if(age>18){
    // alert("You are an adult");
    console.log("You are an adult");
}else{
    console.log("You are not an adult")
}

//2-Check if a variable named "score" is less than or equal to 50 and display a message "You 
// failed the test" if it is. 

var score = 45;
if(score>=50){
    console.log("You bass the test");
}else{
    console.log("You failed the test")
}

//3- Check if a variable named "name" is equal to "John" and display a message "Hello, John" if it is.

var name_="John";
if(name_ == "John"){
    console.log("Hello, John");
}else{
    console.log("Not Hello")
}

//4-Check if a variable named "day" is not equal to "Saturday" and "Sunday" and display a 
// message "It's a weekday" if it is.

var day="Monday";
if(day == "Saturday" || day == "Sunday"){
    console.log("It's a holiday");
}else{
    console.log("It's a weekday")
}

//5- Check if a variable named "num" is divisible by 2 and display a message "The number is 
// even" if it is. 

var num = 4;
if(num%2==0){
    console.log("The number is even")
}else{
    console.log("The number is odd")
}

//Mid

//6- Check if a variable named "char" is a letter and display a message "It's a letter" if it is. 

var char = 'a';
if(Boolean(char.match(/[a-zA-Z]/))){
    console.log("It's a letter")
}else{
    console.log("It's not a letter" )
}

//7-Check if a variable named "list" is an array and display a message "It's an array" if it is. 

let list = [1, 2, 3];
if(Array.isArray(list)==true){
    console.log("It's an array")
}else{
    console.log("It's not an array")
}

//8-Check if a variable named "x" is a positive number and display a message "x is a positive number" 

var x = 5;
if(x>0){
    console.log("x is a positive number")
}else{
    console.log("x is a negative number")
}

//9-Check if a variable named "y" is a negative number and display a message "y is a negative 
// number" if it is.

var x = -5;
if(x>0){
    console.log("x is a positive number")
}else{
    console.log("x is a negative number")
}

//10-Check if a variable named "z" is a multiple of 3 and display a message "z is a multiple of 3" if it is. 

var z = 9;
if(z%3==0){
    console.log("z is a multiple of 3")
}else{
    console.log("z doesn't a multiple of 3")
}

//Advanced

//11- Check if a variable named "gpa" is greater than or equal to 3.0 and display a message 
// "Congratulations, you have a good GPA!" if it is.

var gpa = 3.5;
if(gpa>3.0){
    console.log("Congratulations, you have a good GPA!")
}

//12- Check if a variable named "password" is at least 8 characters long and display a message 
// "Your password is strong" if it is.

var password = "mypassword123";
if(password.length>8){
    console.log("Your password is strong")
}else{
    console.log("Your password is less than 8")
}

//13-Check if a variable named "age" is between 18 and 65 (inclusive) and display a message 
// "You are of working age" if it is.

var age = 30;
if(age>18 && age<65){
    console.log("You are of working age");
}

//14- Check if a variable named "color" is either "red", "green", or "blue" and display a message 
// "color is a primary color" if it is.

var color="red";
if(color == "red" || color == "green" || color == "blue"){
    console.log("color is a primary color");
}else{
    console.log("color is not a primary color")
}

//15-using Function `isNumber()` checks if input variable is a number by using isNaN() in-built 
// JavaScript function.

function isValidNumber(num){
    if (isNaN(num)==false) 
        console.log(num +" is a valid number" ); 
     else {
        console.log(num +"  is not a number" );
   }
}
isValidNumber(11);
isValidNumber("19") 
isValidNumber("xyz") 
isValidNumber("17.5") 
isValidNumber("21F")
