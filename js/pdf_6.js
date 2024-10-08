//1. Create an object with properties name, age, and gender and print its values to the console.  

var user = { name: "Adam", age: 25, gender: "male" };
console.log(user.name + user.age + user.gender);

//2. Create an object and add a new property to it using dot notation.  

var user2 =  {name: "Adam", age: 25 }; 
user2.gender= "male";

for (key in user2){
    console.log(`${key} : ${user2[key]}`)
  }

//3. Create an object and add a new property to it using bracket notation. 

var user3 =  {name: "Adam", age: 25 }; 
user3['gender']= "male";

for (key in user3){
    console.log(`${key} : ${user3[key]}`)
  }

//4. Access the value of a property in an object using dot notation.  

console.log(user.name);

//5. Access the value of a property in an object using bracket notation.  

console.log(user["name"]);

//6. Use a for-in loop to iterate through the properties of an object.  

for (key in user3){
    console.log(`${key} : ${user3[key]}`)
  }

//7. Use the Object.keys() method to get an array of an object's properties.  

console.log(Object.keys(user2));

//8. Use the Object.values() method to get an array of an object's values.  

console.log(Object.values(user2));

//9. Use the Object.entries() method to get an array of key-value pairs for an object.  

console.log(Object.entries(user2));

//10. Use the Object.assign() method to merge two objects. 
var user4 =  {name: "Adam", age: 25 }; 
var user5 =  {gender: "male" }; 

console.log(Object.assign(user4,user5));

//11. Use the Object.freeze() method to prevent changes to an object.  
var user6 =  {name: "Adam", age: 25 }; 

console.log(Object.freeze(user6));

//12. Use the Object.seal() method to prevent changes to an object's properties but allows changes to its values.

console.log(Object.seal(user6));