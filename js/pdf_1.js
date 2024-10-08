//1. Write the expressions in JavaScript syntax for the following accounting equations (analyze the 
// operation from the input and output) – use google if necessary://

var f_in = 1000;
var s_in = 500;
var z=f_in/s_in;
console.log("Cash flow ratio= "+z);

////////////////////////

var f_in = 1000;
var s_in = 500;
var z=f_in-s_in;
console.log("Net income= "+z);

////////////////////////

var f_in = 1000;
var s_in = 500;
var z=f_in+s_in;
console.log("Total assets= "+z);

////////////////////////

var f_in = 1000;
var s_in = 500;
var z=f_in*s_in;
console.log("Net income (using profit margin and sales)= "+z);

////////////////////////

var f_in = 7;
var s_in = 9;
var t_in = 2;
var z=(f_in+s_in+t_in)/3;
console.log("Average= "+z);

////////////////////////

var f_in = 150;
var s_in = 0.3;
var z=f_in-(f_in*s_in);
console.log("Discount= "+z);

////////////////////////

var f_in = 20;
var z=true;
if(f_in>18 && f_in<30){
    z=true;
}else{
    z=false;
}
console.log("Age limit (older than 18 and less than 30)= "+z);

////////////////////////

var f_in = 2;
var s_in = 3;
var z=f_in/s_in;

for(let i=0;i<s_in;i++){
    z=f_in*f_in;
    z=z+z;
}
console.log("Exponential= "+z);

////////////////////////

var f_in = 2;
var s_in = 4;
var z=f_in%s_in;
console.log("Remainder= "+z);

////////////////////////

//2. Find the output for these expressions and justify the output according to JavaScript interpretation://

console.log(typeof(100));

console.log(typeof(73.9));

console.log(typeof(NaN));

console.log(typeof("Water"));

console.log(typeof(false));

console.log(typeof(9 != 11));

console.log("Orang" + "e");

console.log( "Orange" - "s");

console.log("4" + "8");

console.log("4" - "8");

console.log("name" + 3);

console.log("name" - 3);

console.log(82 * "word");

console.log(1 + "hello");

console.log("hello" + 1);

console.log(1 + true);

console.log("hello" + true);

console.log(typeof (Infinity));

console.log(1 == '1');

console.log(1 === '1');

//////////////////////////////////////////////////////////////////////////////////////////////
//1. Write the code to make this string “Welcome to Orange” outputted in the following forms using 
// string methods://

let o="Welcome to Orange"; 

console.log(o.toUpperCase());

console.log(o.slice (8,10).toUpperCase());

console.log("Hello from "+o.slice(11));

console.log(o.toLocaleLowerCase());

console.log(o.length);

console.log(o.replace("Orange" ,'"Orange"'));

console.log(o+" Jordan");

//2. Write the code that replaces all occurrences of the first letter of a string with '*'
var f_in="cactus";

console.log()

//2. Using these two arrays write the JavaScript code that performs these operations on them:
// /
// /
// /

/////////Array/////////
//1. Write the code to get this array outputted in the following forms:
var arr1=['Coding', 'Academy', 'By', 'Orange'];
arr1.push("Jordan");
console.log(arr1);

/////////////////////////////////////////////

var arr1=['Coding', 'Academy', 'By', 'Orange'];
arr1.splice(2);
console.log(arr1);

/////////////////////////////////////////////

var arr1=['Coding', 'Academy', 'By', 'Orange'];
var arr2=["Welcome","To"]
 arr1=arr2.concat(arr1);
console.log(arr1);

/////////////////////////////////////////////

var arr1=['Coding', 'Academy', 'By', 'Orange'];
arr1.splice(0,1);
console.log(arr1);

////////////////////////////////////////////

var arr1=['Coding', ' Academy', ' By', ' Orange'];
console.log('"'+arr1[0]+arr1[1]+arr1[2]+arr1[3]+'"');

/////////////////////////////////////////////////

var arr1=['Coding', 'Academy', 'By', 'Orange'];
console.log(arr1);

/////////////////////////////////////////////////

var arr1=['Coding', 'Academy', 'By', 'Orange'];
arr1.splice(1,2)
console.log(arr1);

/////////////////////////////////////////////////
//2. Using these two arrays write the JavaScript code that performs these operations on them:

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.splice(3);
console.log(vegetables);

/////////////////////////////////////////////////

fruit.splice(0,1);
console.log(fruit);

/////////////////////////////////////////////////
var indx=fruit.indexOf("orange");
console.log(indx);

/////////////////////////////////////////////////

fruit.push(indx);
console.log(fruit);

/////////////////////////////////////////////////

var l=vegetables.length;
console.log(l);

/////////////////////////////////////////////////

vegetables.push(l);
console.log(vegetables);

/////////////////////////////////////////////////

var food=fruit.concat(vegetables);
console.log(food);

////////////////////////////////////////////////

food.splice(4,2);
console.log(food);

////////////////////////////////////////////////

