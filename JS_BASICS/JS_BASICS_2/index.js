console.log('Chaliye suru karte he');
////Objects are revolve arround real-life entities with properties and behavio

//// object creation:-

const rectangle ={
    length:1,
    breadth:2, // property of object

    draw:function(){ // behaviour of object is create by method
       console.log('drawing rectangle');
        }
};
// through dot('.') we can access the methods of that object.
 
// object can create in two ways 1. by factory function 2.by constructer function

// 1.factory function:- In this function first we crate an object after that we just return this object.
//here we use Camelcase --> example: numberOfStudents

function createRectangle(){
    
const rectangle ={
    length:1, // property of object
    breadth:2, // property of object

    draw:function(){ // behaviour of object 
        console.log('drawing rectangle');
        }
};
return rectangle;
}
// Because of facory function return an object so we should store this object with in a varibale, Expain in next Line
let rectangleObj1=createRectangle();
// userfriendly code of object creation
function createRectangle1(len,brea){
    
    const rectangle ={
        length:len, // property of object
        breadth:brea, // property of object
    
        draw:function(){ // behaviour of object 
           console.log('drawing rectangle');
            }
    };
    return rectangle;
    }
let rectangleObj2=createRectangle1(4,5);

// 2.by constructer function
//in this we use -->Pascal Notation --> first letter of every word is Capital -->NumberOfStudent

// construcer function is such function which is initialize or define the properties and methods
function Rectangle( ){
    //this keyword refers to the current object
    this.length=1;
    this.breadth=2;
    this.draw=function(){
        console.log('drawing');
    }
}
//object creation using constructor function.
// new keyword create an empty object
let rectangleObject=new Rectangle();
// userfriendly code of object creation
function Rectangle(len,brea){
    this.length=len;
    this.breadth=brea;
    this.draw=function(){
       console.log('drawing');
    }
}
let rectangleObject2=new Rectangle(10,20);
//Dynamic Nature of Object
function Rectangle(len,brea){
    this.length=len;
    this.breadth=brea;
    this.draw=function(){
        console.log('drawing');
    }
}
let rectangleObjec3=new Rectangle();
rectangleObjec3.color = 'yellow';
rectangleObjec3.color = 'yellow';
// console.log(rectangleObjec3);
//  delete rectangleObjec3.color;
// console.log(rectangleObjec3);

//Constructor Property:-

 //any object in JS having property known as Constructor which indicates how this object is created.

 let Rectangle1=new Function('length','breadth',
 `this.length=length;
 this.breadth=breadth;
 this.draw=function(){
     console.log('drawing');
 }`);
 //object creation using Rectangle1
 let rect=new Rectangle1(2,3);
 console.log(rect);

 // Functions are Object:-
// Here rect is a object and through dot(".") operator we can access all properties and behaviour.
rect.length;
console.log(rect);
// here first we declare a function whose name is Rectangle but here also with the help of dot(".") operator we cane access its properties like length,breadth and methods like name,bind etc.
function Rectangle(len,brea){
    this.length=len;
    this.breadth=brea;
    this.draw=function(){
        console.log('drawing');
    }
}
Rectangle.name;//o/p: name of the function i.e;Rectangle

// //Types in JS:-

// //There are 2 types. 1.Primitive or Value types , 2.Reference types or Objects
// //1. Primitive types:-
//Example:Numbers,String,Boolean,Undefined,Null
// let a=10;
// let b=a;
// a++;
// console.log(a); //O/P:11
// console.log(b); //O/P:10
////2. Reference types:-
// Example: Function,objects,Array etc all are refered as object.
// let a ={
//     value:10
// };
// let b=a;
// a.value++;
// console.log(a); // o/p:11
// console.log(b); // o/p:11

 ////Difference between Primitive and Reference type:-Primitives are copied by their value but Reference are copied by their address/reference.
//  let x=10;
//  function inc(x){
//     x++;
//  }
//  inc(x);
//  console.log(x);

//  let y={
//     value:10
//  };
//  function inc(y){
//    y.value++;
//  }
// inc(y);
// console.log(y);

// Iterating through Object:-
//1.for-in and 2.for-of
//fir-in Loop:-
let rectangle2={
    length:2,
    breadth:4
};

for(let key in rectangle2){
    //keys are reflected through key variable
    //values are reflected through rectangle2[key]
//console.log(key,rectangle2[key]);
}
////2.for-of loop:-
// for(let key of rectangle2){
    // console.log(key);// gives error because it is not iterable.
// }
// for(let key of Object.entries(rectangle2)){
//     console.log(key);// bgive output 2 and 4.
// }

// code to check wether a proprty is available or not:
if('color' in rectangle2)
{
    console.log('present');
}
else{
    console.log('Absent');
}

////Object Clone:-
////1.Itaration, 2.Assign , 3.Spread
////1. cloning through Iteration:
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

////2.clonig through Assign
//  let src={
//     a:10,
//     b:20,
//     c:30
//  };
//  let src2={ value:28};
 
//  let dest=Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(dest);
////3. clonning through Spread
let src={
    a:10,
    b:20,
    c:30
 };
 let dest = 
 {...src};
 console.log(dest);
 src.q++;
 console.log(dest);



