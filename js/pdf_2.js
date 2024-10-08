//1-JavaScript Functions
//Basic

//1.Create a function that will display the smallest value in the array. 
var arr1=[30,45,60,7]
function findSmallest(arr){
    
    console.log(Math.min(...arr));
}
findSmallest(arr1);

//2. Function that will return your string in Alphabetical order 
function AlphabeticalOrder(arr){
    let arr1=arr.split("");
    console.log(arr1.sort());
}
AlphabeticalOrder('hello');

//3. In mathematics, the factorial of a non-negative integer n, denoted by n! is the product of all 
// positive integers less than or equal to n. In simple terms, the Factorial of 8 is solved like this:
function factorial(num){
   if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
  }
}
console.log(factorial(8));

//4. A Write a function that lets you know if a number is Even or Odd . 

function oddOrEven(num){
    if(num%2==0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}
oddOrEven(9);

//5. Remove all Odd number(s) in an array and return a new array that contains Even numbers only.

function evenNum(arr){
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
evenNum([1, 2, 3, 4, 5, 6,7,8,9]);

//Mid

//6. Create a function that takes in an array as an argument, checks the data type of each 
// element, and removes any elements that are strings. The function should return the modified array. 

function numbersOnly(arr){
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(typeof(arr[i])!='string'){
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']); 

//7. Return the sum of a number going back to it's root. In other words,

function addUp(num){
    if (num == 0) 
         return 0;
     else {
         return (num + addUp(num - 1));
   }
}
console.log(addUp(8)); 

//8. Create a function that will accept an array and do the following: 

function minMaxLengthAverage(arr){
    let arr2=[];
    var sum =0;
    arr2.push(Math.min(...arr));
    arr2.push(Math.max(...arr));
    arr2.push(arr.length);
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    let avg = sum/arr.length;
    arr2.push(avg)
    console.log(arr2);
}
minMaxLengthAverage([7, 13, 3, 77, 100]); 

//9. Convert the given number to a Roman Numeral 








//Advanced

//10. Return how many words was given

function countWords(arr){
    let arr1=arr.split(" ");
    console.log(arr1.length);
}
countWords('hello from CodingAcademy!');

//11.Create function to Multiply all elements in an array by it's length 

function MultiplyByLength(arr){
    let arr2=[];
    var avg;
    for(let i=0;i<arr.length;i++){
        avg = arr[i] * arr.length; 
        arr2.push(avg);
    }
    console.log(arr2);
}
MultiplyByLength([4, 2, 5]); 

//12. Create a function that will check if str1 ends with the characters in str2 

function checkEnding(arr,arr_2){
    let arr1=arr.split("");
    let arr2=arr_2.split("");
    if(arr1[arr1.length-1]==arr2[0]){
        console.log(true);
    }else{
        console.log(false);
    }
    
}
checkEnding("CodingSchool", "Ac");

//13. Create a function that will repeat each string character two times 

function doubleChar(arr){
    let arr1=arr.split("");
    let arr2=[];
    for(let i=0;i<arr1.length;i++){
       arr2.push(arr1[i]);
       arr2.push(arr1[i]);
    }
    console.log(arr2.join(""));
}
doubleChar("Coding");

//14. Return the index location of an element from a given array. First argument is the array 
// you'd like to search and the second one is the element (either string/number) to look for. 

function findIndex(arr,ele){
    for(let i=0;i<arr.length;i++){
        if(ele==arr[i]){
            console.log(i+1)
        }
     }
    
}
findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali');

//15.Create function to Return the absolute sum of all the array elements 

function getAbsSum(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=arr[i]*-1;
        }
        sum = sum + arr[i];
    }
    console.log(sum);
}
getAbsSum([-1, -3, -5, -4, -10, 0]); 