console.log('kya hal hai');
// //Function:-
// //Function is a block of code that fulfils a specific task.
////Syntax:-
// //1. functon <function name>(<input parameter>){
    ////body of the function
// //}
// //Why we need function?
//To avoid bulky, imorove reusability,reduce buggy of the code.
////Function Declartion:-
// //1. functon <function name>(<input parameter>){
    ////body of the function
// //}
function run(){
    console.log('running');
}//this will not give any o/p untill that function is not invoke.
//function call or invoke
// run();// you can call the function anywhere in your program and it can run because in JS,our JS engine is collect all the function and put those function in top of the file, So during code Execution first function will executed.After that remaing code will executed,this concept is known as hoisting.
// Hoisting is the process of moving function declartion to the top of file and this is done automatically by JS engine.
////Function Assignment:-
////(A)-Named  Function Assignment:-Here function name is present.
let stand=function walk(){
    console.log('walking');
};
//function call:
stand();// It will call only after the assignment.If you call the this function in any where it can't run because hoisting is done only in function declaration not in function Assignment.we can also call like this:
let jump=stand;
jump();
////(B):Anonymouds Function Assignment:-Here function name is not present.
let stand2=function () {
    console.log('walking');
};
stand2();
//// is JS is a Dynamical Language;Ans:YES Example is given below:
let x=1;
x='a';
console.log(x);// o/p is a.[JS is a Dynamic Language]

 function sum(a,b){
    return a+b;
 };
 console.log(sum(1,2));//o/p is 3
 console.log(sum(1));// o/p is NAN because we give only the value to a only but b takes automatically undefined so o/p is NOT.
 console.log(sum());//O/P is NAN
 console.log(sum(1,2,3,4,5));// o/p is 3 but it not take 3,4,5 so where they are go if they are not used in sum().let's see:
////So ther is a special object known as Argument which store those values.let's see:-
//  function sum(a,b){
//     console.log(arguments);
//     return a+b;
//  };
//  console.log(sum(1,2,3,4,5,6));//o/p is 3 and 3,4,5,6 go to the arguments object.
////Dynamicaly function to print the sum all the values pass to sum() except passing 2 i/p to sum():
 function sum(a,b){
    let total=0;
    for(let value of arguments)// we use loop to access the value from arguments object.
    total=total+value;
    return total;
 }
 let ans=sum(1,2,3,4,5);
 console.log(ans);

////Rest Operator(...):-
// in a function we may have lots of parameter so with the help of rest operator we can handle those parameter. Let's see:
function sum(...args){//here rest parameter always your last formal parameter.like:sum(num,num2,...args);so in num=1;num2=2,args=[3,4,5,6].
   console.log(args); 
}

sum(1,2,3,4,5,6);// we print an array not an object.
// //Default Parameters:-
function intrest(p,r,y){
    return (p*r*y)/100;
}
console.log(intrest(1000,10,5));//500
//but if user don't pass any one or all values to the parameter then it will not executed.So we can pass a default value to the parameter .
function intrest(p,r=6,y=10){
    return (p*r*y)/100;
}
console.log(intrest(1000));

function intrest(p,r=6,y=10){
    return (p*r*y)/100;
}
console.log(intrest(1000,8));
////But there is a rule in Default Parameter i.e;when you start a value as default make sure that after that parameter all must be a default value.such that if you take 'r' as default parameter so 'y' must be a default parameter. 
function intrest(p,r=6,y){
    return (p*r*y)/100;
}
console.log(intrest(1000,undefined,8));// if u make default parameter as undefind so after that no need to worry about others it may be default or not.[BUT IT IS NOT A GOOD PRATICE].
////GETTER & SETTER
// let person={
//     fName:'surya',
//     lName:'mani'
// };
// // console.log(person);
// //through function
//  function fullName(){
//     return `${person.fName}${person.lName}`;
// };
// console.log(fullName());

// //getter -> Access properties
//// setter -> change or mutet properties
// let person={
//     fName:'surya',
//     lName:'mani',
//    get  fullName(){
//         return `${person.fName}    ${person.lName}`;
//     },
//    set fullName(value){
//     let parts = value.split(' ');
//     this.fName = parts[0];
//     this.lName = parts[1];
// }
// };
// console.log(person.fullName);[for getter]
// person.fullName='Sun diamond';
// console.log(person.fullName);[for setter]


////TRY & CATCH block:
// let person={
//         fName:'surya',
//         lName:'mani',
//        get  fullName(){
//             return `${person.fName}    ${person.lName}`;
//         },
//        set fullName(value){
//         if(typeof value!==String){
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
//     };
//     // console.log(person.fullName);//[for getter]
//     try{
//         person.fullName=true;
//     }
//  [1]:-  catch(e){
//     alert('You have sent a number in fullName');
//    }
// [2]:-   catch(e){
//     alert(e);
//    }
//     console.log(person.fullName);


////SCOPE:

{
    let a=5;
    // console.log(a);// o/p is 5
}
//console.log(a);// a is not defind beacuse in let it use only with in the block.
{
    var b=5;
    // console.log(b);// o/p is 5
}
// console.log(b);

function walk(){
    var a=4;
}
// console.log(a);// o/p is a is not defined
//// if var is declared with in the function so it has scope only with in the function.But if var is not declared with in the function so it has scope with in the entire file.
// for(let i=0;i<=10;i++){

// }
// console.log(i);// o/p is error[i is not defined]
for(var i=0;i<10;i++){

}
console.log(i);// o/p is 10
if(true){
    let a= 5;
}
console.log(a); // o/p is not defined but if u take var then it works.
function a(){
    const ab = 5;
}
const ab = 5;
function b(){
    const ab = 5;
}

