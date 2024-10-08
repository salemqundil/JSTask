//Basic

//1. Use a for loop to print numbers from 1 to 10 using for.  

for(let i=0;i<10;i++){
    console.log(i+1)
}

//2. Use a while loop to print numbers from 1 to 10 using while. 
 let i=0;
while(i<10){
    console.log(i+1)
    i++;
}

//3. Use a for loop to iterate through an array and print each element.  
var arr1 = [1, 2, 3, 4, 5];

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}

//4. Use a for loop to print even numbers from 0 to 10. 

for(let i=0;i<10;i++){
    if(i%2==0){
        console.log(i)
    }
}

//5. Use a for loop to print the sum of numbers from 1 to 10.
var sum =0;  
for(let i=1;i<=10;i++){
    sum =sum+i;
}

console.log(sum);

//6. Use a for loop to find the largest number in an array. 
let x;
x=arr1[0];
for(let i=1;i<arr1.length;i++){
    if(x<arr1[i]){
        x=arr1[i]
    }
}
console.log(x);

//7. Use a for loop to find the smallest number in an array. 
let y;
y=arr1[0];
for(let i=1;i<arr1.length;i++){
    if(y>arr1[i]){
        y=arr1[i]
    }
}
console.log(y);

//11. Use a for loop to find the average of numbers in an array  
var sum =0;  
for(let i=0;i<arr1.length;i++){
    sum =sum+arr1[i];
}
console.log(sum/arr1.length);

//Mid

//12. Use a for loop to find the factorial of a number. 

var sum =1;  
for(let i=5;i>0;i--){
    sum = sum*i;
}
console.log(sum);

//13. Use a for loop to print the Fibonacci sequence up to a given number. 
var j = 0;
var k = 1;
var z = 0;
for(let i=0;i<7;i++){
    console.log(z)
     j=k;
     k=z;
     z=k+j;
        
    
}

//14. Use a for loop to print the prime numbers up to a given number. 






//15. Use a for loop to print a multiplication table for a given number .

for(let i=1;i<11;i++){
    var z = i*5
    console.log("5 x "+i+"="+z)
}

//16. Use a for loop to print the elements of a 2D array . 
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j])
    }
}

//17. Use a for loop to print the elements of an array in reverse order.  
var arr = [1, 2, 3, 4, 5];
for(let j=arr.length-1;j>=0;j--){
    console.log(arr[j])
}

//18. Use a for loop to print the elements of an array in a specific range. 

var arr = [1, 2, 3, 4, 5];
for(let j=2;j<=4;j++){
    console.log(arr[j])
}

//19. Use a for loop to print the elements of an array with a specific step. 

var arr = [1, 2, 3, 4, 5];
for(let j=0;j<arr.length;j+=2){
    console.log(arr[j])
}

//20. Use a for loop to check if a number is in an array. 

var arr = [1, 2, 3, 4, 5];
var n = 4;
for(let j=0;j<arr.length;j++){
    if(arr[j]==n){
        console.log(true)
    }
}

//21. Use a for loop to find the frequency of a number in an array. 

var arr = [1, 2, 1, 4, 5,1];
var n = 1;
var sum = 0;
for(let j=0;j<arr.length;j++){
    if(arr[j]==n){
        sum +=1;
    }
}
console.log(sum)

