
// // line below is used to print on the condsole window
// console.log('Namaste Dunia version8');
// let a=true;
// var b=true;
// var b=5;
// const c=19;
// console.log(b);
// console.log(c);
// //RULES for variables
// 1.can not be a reserved keyword
// 2.must be meaningfull
// 3.can not start with a Number
// 4.can not contain space and -
// 5. alwyas use camelcase
// let d=4;
// // d=null;
// console.log(d);
// // DYANAMIC TYPING
// let lastName='surya';
// console.log(lastName);
// lastName=5;
// console.log(lastName);
// // create an object and acceess it
// let person={
//     myName:'SURYA',
//      myAge:29
// };
// // access through dot notation
// console.log(person.myName);
// console.log(person.myAge);
// // access through bracket notation
// console.log(person['myName']);
// // create an array and access it
// let arr=['sury','mani','patra'];
// console.log(arr[2]);
// // undefined arr[3]
// console.log(arr[3]);
// // add another value to array
// arr[3]='ramesh';
// //over ride a value in array
// arr[1]=2;
// console.log(arr[3]);
// console.log(arr[1]);

//// OPERATORS:
 
//// 1. arithmatic operators

// let s=2;
// let p=4;
// let m=s+p;
// m=s-p;
// m=s*p;
// m=s%p;
// m=s/p;
// m=s**p;
// console.log(m);



//// increment and decrement
// // pre-increment: first increment the value secondly use the value.
//// post-increment:firstly use the value secondly increse the value

// let s=5;
// let m=10;
// console.log(s++);
// console.log(++s);
// console.log(m--);
// console.log(--m);
// console.log((++s)*(--m));   //54
// console.log((s++)*(--m));   //48
// console.log((s++)*(m--));   //56
// console.log((++s)*(m--));   //63


// //ASSIGNMENT OPERATOR
// assign the Rvalue to Lvalue.Rvalue may be const,expression,variable But Lvalue always a variable.
// let s=5;
// let p=4;
// s=s+5;
// s+=5;
// console.log(s);

// //comparison operator

// console.log(s<p);
// console.log(s>p);
// console.log(s<=p);
// console.log(s>=p);
// console.log(s===p);
// console.log(s!==p);
// eqyality 1.loose equality(==) 2.strict equality(===)
// Strict Equality -> Both Data & Values must be same
// Loose Equality -> Only values be same 
// let num = 1;
// let str = '1';
// console.log(num===str);
// console.log(num==str);

//// ternary operator
////Syntax: Cond ? val1 : val2;

// let age=17;
// let staTus=(age>=18)?'i can vote':'i can not vote';
// console.log(staTus);

//// logical operator
// //A. AND[it returns true if all cond is true] &&
//// B.OR[ it returns true only if either one condition is true]
// //C.NOT[ true -> false and false -> true]
// let s=3;
// let m=4;
// let p=true;
// console.log(s>m&&s<m);
// console.log(s>m||s<m);
// console.log(!p);
// console.log(false||'surya');
// console.log(false||5||1);  // Short circuit concept[ if one output is true then it executed further cond]
//Falsy values -> undefined,null,0,false,'',NaN
//Truthy value -> Anything that is not falsy value


//// bitwise operator

// let a=2;
// let b=3;
// console.log(a&b);
// console.log(a|b);

//// precedence of operator

// //BODMAS or use bracket

// //control statement

//// 1. if-elseif-else

// let marks=30;
// if(marks>=90){
//     console.log('A');
// }
// else if(marks>=80){
//     console.log('B');

// }
// else if(marks>=70){
//     console.log('C');
    
// }
// else if(marks>=60){
//     console.log('D');

// }
// else{
//     console.log('E');

// }


////2.switch case

// let num=1;
// switch(num){
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     default: console.log('D');
    
// }


// //loops

// //1.for loop

// for(let i=1;i<=5;i++){
//     console.log('surya'+i);
// }

//// 2.while loop

// let i=1;
// while(i<=5){
// console.log('surya' + i);
// i++;
// }

//// 3.do-while loop

// let y=1;
// do{
//     console.log('surya' + y);
//     y++;
// }while(y<=5);






































