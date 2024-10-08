//Basic

//1.Create an array of numbers and use the forEach() method to print each element to the console. 

var arr1=[1, 2, 3, 4, 5] ;
arr1.forEach(element => {
    console.log(element);
});

//2.Use the map() method to square each element in an array of numbers and return a new array. 

var arr1= [1, 2, 3, 4, 5]
var arr2=[];
arr1.map(function (x) {
    return arr2.push(x* 2);
  });
console.log(arr2);

//3.Use the filter() method to create a new array containing only even numbers from an original array.

arr2=arr1.filter(x => x % 2 == 0);
console.log(arr2);

//4.Use the reduce() method to sum up all elements in an array of numbers. 
var sum = 0;
sum = arr1.reduce((a,x)=> a+x)
console.log(sum)

//5.Use the sort() method to sort an array of strings alphabetically. 

var arr1 =  ["apple","cherry","banana"];
console.log(arr1.sort());

//Mid

//6.Use the reverse() method to reverse the order of elements in an array. 

console.log(arr1.reverse());

//7.Use the concat() method to combine two arrays into a single array. 

var arr1 =  [1, 2, 3];
var arr2 =  [4, 5, 6];
console.log(arr1.concat(arr2));

//8.Use the slice() method to extract a portion of an array. 
//9.Use the splice() method to add and remove elements from an array. 


var arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.slice(2,4));

//10.Use the indexOf() method to find the index of a specific element in an array. 

var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.indexOf(3));

//11.Use the join() method to convert an array to a string. 

console.log('"'+arr1.join(",")+'"');

//12.Use the split() method to convert a string to an array. 

var arr1= "1,2,3,4,5";
console.log(arr1.split(","));

//Advanced

//13.Use the length property to find the number of elements in an array. 

var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length);

//14.Use the for...of loop to iterate through an array.
//15.Use the for...in loop to iterate through the indexes of an array. 

for(let i=0;i<arr1.length;i++){
   console.log(arr1[i])
}

//16.Use the Array.isArray() method to check if an object is an array.

var gab = Array.isArray(arr1);
 console.log(gab);

 //17.Use the Array.from() method to convert an array-like object to an array. 

var obj =  {0: "a", 1: "b", 2: "c", length: 3}
var arr1 = Array.from(obj);
console.log(arr1);

//18.Use the Array.of() method to create an array with a set of elements. 

var a=1;
var b=2;
var c=3;

var arr1 = Array.of(a,b,c);
console.log(arr1);

//19.Use the Array.prototype.fill() method to fill an array with a specific value. 

var arr1= [1, 2, 3, 4, 5];
var a=0;
var b=3;

console.log(arr1.fill(a,0,b));

//20. Use the Array.prototype.copyWithin() method to copy a sequence of elements within an array.

var arr1= [1, 2, 3, 4, 5];
var a=1;
var b=3;

console.log(arr1.fill(a,0,b));

