// console.log('var');
// let p = 5;
// p = 3;

// console.log(p);
// // blockscope creates scope for a variable for a particular block
// {
//   let a = 10;
//   console.log(a);
// }
// // console.log(a);

// for (
//   var i = 0;
//   i < 10;
//   i++ // var gives global scope access
// ) {
//   console.log(i);
// }
// console.log(i); // reason for printing i as 10

// // const is similar to let but const is immutable, value will not be change
// // const b = 2;
// // b = 3;  it will throw TypeError as const value cannot be change

// //  function using arrow expression

// // var sum = (a, b) => {
// //   return a + b;
// // };
// // sum(2, 3);

// Dollar
// const name = 'amin';
// console.log('My Name is ' + name);
// //New Way
// console.log('My Name is ${name}');

// Copying Array
// const arr1 = [1, 2, 3, 4];
// const arr2 = [...arr1, 5, 6, 7, 8]; // three dots are spread operator which joins arr1 and arr2
// console.log(arr2);

// Rest Parameter
// const sum = (a, ...n) => {
//   console.log(a, ...n);
// };
// sum(2, 3, 4, 5);

//Destructing assignment
// const [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

//for _ofloop : gives elements of array without using index as we used to do old for loop
// google for of_loop for code

//Array Method - MAP imp method in react basically used to transform an array
// Array Method - FILTER imp method in react used to filter elements based on conditions
// Array Method - REDUCE imp method in react used to takes all values of array and give a single output

const arr = [1, 2, 3, 4];
// Map
// const arrMap = arr.map((a) => {
//   return a * a;
// });
// console.log(arrMap);
const arrMap = arr.map((a) => a * a);
console.log(arrMap);

//Filter Method Code
// const arrFilter = arr.filter((a) => {
//   return a % 2 == 0;
// });
// console.log(arrFilter);

// One Liner Filter
const arrFilter = arr.filter((a) => a % 2 == 0);
console.log(arrFilter);

//Reduce Method Code

// const arrReduce = arr.reduce(
//   (
//     a,
//     c // a = accumulator(sum) c = current(currenValue) ,0 is an initial value
//   ) => {
//     return a + c;
//   },
//   0
// );
// console.log(arrReduce);

// One Liner Reduce Method
// const arrReduce = arr.reduce(
//   (
//     a,
//     c // a = accumulator(sum) c = current(currenValue) ,0 is an initial value
//   ) => {
//     return a + c;
//   },
//   0
// );
// console.log(arrReduce);

const arrReduce = arr.reduce((a, c) => a + c, 0);
console.log(arrReduce);
