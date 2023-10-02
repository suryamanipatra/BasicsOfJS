console.log("Hello jee!");
// //Built-in Object and Array

// //1. Bulit-in Objects:-

// //A.Math Object:-

// console.log(Math.PI);
// //3.141592653589793
// console.log(Math.round(1.2));
// //1
// console.log( Math.round(1.8));
// //2
// console.log( Math.round(1.6));
// //2
// console.log(Math.max(2,3,4));
// //4
// console.log( Math.min(2,3,4));
// //2
// console.log(Math.abs(2));//Absolute means +ve value if it is +ve then after absolute it remains +ve and if it is -ve then after absolute it becomes +ve.
// // 2
// console.log( Math.abs(-2));
// // 2

// //B. String Object:-

// let lastName = 'Surya'; // Here we create  a primitive string
// let firstName = new String('Surya'); // Here we create a String object
// console.log(typeof(lastName));// o/p is String
// console.log(typeof(firstName));// o/p is Object
// // if we want to convert a primitive String to a String Object then we can do with the help of dot(".", When we write a dot with a primitive String it will taken as String Object).Example given below:-
// console.log(lastName.length);// o/p is 5
// console.log(lastName.indexOf('S'));//o/p is 0
// console.log(lastName.includes('rya'));//o/p is true
// console.log(lastName.startsWith('Sur'));// o/p is true
// console.log(lastName.endsWith('ys'));//o/p is false
// console.log(lastName.toUpperCase());// o/p is 'SURYA'
// console.log(lastName.toLowerCase());// o/p is 'surya'
// console.log(lastName.replace('Surya','Sundia'));// o/p is Sundia
// let message='this is my first message';
// let words=message.split(' ');//this split(),split the total message according to the parameter pass to the split()
// console.log(words);

// //C.Template Literal:-
//  // templete literals are literals delimited with backtick(``) characters,allowing for multi-line string interpolation with embeded expression. with this we can display our message in our own way.Examlpe is given below:
//  let newMessage=
//  `Hello Mr
// Welcome ${lastName}, 
 
//  Thanks, for the Opertunitty
 
//  Regards,
//  Surya`;// with this $ symbol we can replase something
//  console.log(newMessage);

//  //D: Date and Time:-

//  let date = new Date();
//  console.log(date);// display current time with date
//  let date2=new Date(' july 21 2023 11:02');
// console.log(date2);// display this with day name
//  let date3=new Date(2003,11,16,4);
//  console.log(date3);//this display the total date with date,time,day and time but month stat from 0 to 11


//  //2.Arrays:-

//  //Adding new Element,Finding Elements,Removing Elements,Spliting Elements,Combining Elements.

//  // It is an reference  type and an Object which can store collection of items , either the items can be similar type or different type.

// //A: Creation of array

// let numbers=[1,2,3,4,5,6];
// console.log(numbers);
// //Access the items from array
// console.log(numbers[4]);// 5
// //B: Insertion into Array:-
// // at the end:
// console.log(numbers.push(7));//added 7 at last
// //at the start:
// console.log(numbers.unshift(0));//added 0 at begin
// //at the middile:
// console.log(numbers.splice(2,0,'a','b','c','d'));//added a,b,c,d at the middle after 0,1 with out deleting any items from array.here First parameter show from which index new items can be added.Second Parameter shows after adding new items how much items we want to delete. 
// //C:Searching:-
// // Seraching on Primitive type:
// console.log(numbers);
// console.log(numbers.indexOf(7));// o/p is 11
// console.log(numbers.indexOf(10));// o/p is -1 when number is not present in the array.
// //We want to check if a number is exist in array
// if(numbers.indexOf(7)!= -1)
//     console.log('Present');// But this is not right way
//     //Right way is:
// console.log(numbers.includes(7));// this includes() always return either true or false.
// console.log(numbers.indexOf(1,2));// Through this we can check the number from our own index. First parameter is for which item we want to check and second parameter is from which index we want to check this item.

// //Let's deal searching with references or objects:-

// let courseJs = [
//     {n0:1,name:'surya'},
//     {no:2,name:'Love'}
// ];
// console.log(courseJs);
//     console.log(courseJs.indexOf({no:1,name:'surya'}));//o/p is -1 , but you see this object is present in the Array so the output should must be 0.Let's see why it returns -1 Because here we dealing with reference type .The Object in the Array present in one address and the object which we want to serach this is on another address , But in premitive type we compare with value that's why it retuns cortrect Answer same thing also happens with inculdes().At the end this answre -1 is right but we are doing wrong thing in this case.The right way is with the help of callback(). 
// // A callback function is a function passed into another function as an arguments,which is then invoked inside the outer function to complete some kind of action.
//when we want to search object we use find(). Syntax of find() is like this:
    //arrayName.find(<write your predicate or callback ()>) and this return an object which we want to find.
    //Expain below:
//     let courses= courseJs.find(function(course){
//         return course.name=='surya';
//     });
//     console.log(courses);
//     //this can also write with Arrow Function;
//    let courses= courseJs.find(courses=>courses.name==='surya');
//    console.log(courses);

//  //   D:Removing Elements:-

// let num=[1,2,3,4,5,6,7];
    // console.log(num);// o/p is 1,2,3,4,5,6,7
//     //remove from end
    // console.log(num.pop());//remove 7 from end 
//     //remove from start
    // console.log(num.shift());// remove 1 from begin
//     //remove from middle
    // console.log(num.splice(2,1));// removing 1 item present at index 2 i.e; delete 4.Here first parameter shows after which no index we want to delete and second parameter shows how many items we want to delete.
    // console.log(num); // o/p is 2,3,5,6

// //E:Emptying an Array:-

//  let digits = [1,2,3,4,5];
//  let digits2=digits;
//  console.log(digits);//o/p is 1,2,3,,4,5
//  digits=[];//This is used to empty digits Array.but digits2 array will not be empty.If we want to empty digits2 array we do the following 2 things:
// digits.length=0;// this is used to empty both digits and digits2 Array
// digits.splice(0,digits.length);// this is used to empty digits and digits2 Array
//  console.log(digits);// o/p is [] 
//  console.log(digits2);// o/p is []

//  //F.Combining and Slicing Arrays:-
//  //on primitive type:
//  let first=[1,2,3];
//  let second=[4,5,6];
//  let combined=first.concat(second);// combining of two array
//  console.log(combined);
//  let sliced=combined.slice(2,4);// here the parameters are represents: first parameter is the index from which we want slice and second parameter is the index just before (n-1)to which  we want slice
//  console.log(sliced);
//  let marks=[10,20,30,40,50,60,70];
//  let sl=marks.slice(2);// slice all items from index 2 
//  console.log(sl);
//  let s2=marks.slice();// it create copy of an Array
//  console.log(s2);

//  //G:Spread Operator:(...)

//  let first1=[1,2,3];
//  let second2=[4,5,6];
//  let combined=[...first1,'a','false',...second2,'true'];
//  console.log(combined);
//  let another=[...combined];//create copy of combined
//  console.log(another);

// // H: Iterating an Array:-

// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }
// arr.forEach(function(number){
// console.log(number);
// });//with callback()
// arr.forEach(number=>console.log(number));//with Arrow function

// //I:Joining Arrays:-

// let numbers=[10,20,30,40,50];
//console.log(numbers);//this print the numbers in multiple lines
// const joined=numbers.join(',');// this print the array in one line according to the parameter pass to the join().
// console.log(joined);

// let message='this is my first message';
// let parts=message.split(' ');// it also create an Array
// console.log(parts);
// let joined= parts.join('_');
// console.log(joined);
 
// //J:Sorting:-
//// Here the sort() method sorts the elements of an array and returns the reference to the same array,now stored.The default sort order is ascending, built uopn converting the elements into strings,then comparing their sequense of UTF-16 code unit values.
// let numbers=[5,10,4,40];
// console.log(numbers.sort());
// console.log(numbers.reverse());

// //K:Filtering:-
// // It filtered the total Array and return the desired o/p. Here we have both +ve & -ve value but we want only +ve so we use filter here only.Here we use also a callback().
// let numbers=[1,2,-1,-4];
// let filtered = numbers.filter(function(value){
//     return value>=0;
// });
// console.log(filtered);
// this with help of Arrow functions:-
// let filtered=numbers.filter(value=>value >= 0);
// console.log(filtered);

// //L:Mapping Arrays:-
// //it maps each element of array to something else.

// let numbers=[7,8,9,10];
// let items=numbers.map(function(value){
//     return 'student_no'+ value;
// });
// console.log(items);
// using Arrow Function:
// let items=numbers.map(value=>'studen_no'+value);
// console.log(items);

// // Mapping with Objects:

// let numbers=[1,2,-6,-9];
// let filtered=numbers.filter(value=>value>=0);
// let items=filtered.map(function(num){
//     return {value:num};
// });
// console.log(items);
// using Arrow Function
// let items=filtered.map(num=>{value:num});
// console.log(items);

// //M:-Chaining of Array:-

// let numbers=[1,2,-6,-9];
// let items=numbers
//     .filter(value=>value>=0)
//     .map(num=>{value:num});
// console.log(items);

////Reducing an Array

let arr=[1,2,3,4];
let total = 0;
for(let value of arr)
    total+=value;
console.log(total);//10
////Reducing Array:-
let totalSum=arr.reduce((accumulator,currentValue)=>accumulator + currentValue,0);
console.log(totalSum);//10











    










