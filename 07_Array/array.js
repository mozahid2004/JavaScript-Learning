// Array  

let myArray = ["Lion","Tiger","Cat",1,2,3,4,5,6];

// console.log(myArray);


// Method In Array

// 1.Push() / Pop() / shift() Unshift()
myArray.push(10);
// console.log(myArray);

myArray.pop();
// console.log(myArray);


const arr1 = [1,2]
const arr2 = [3,4]

// const arr3 = arr1.concat(arr2);
const arr3 = [...arr1,...arr2]
// console.log(arr3);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArr = arr.slice(0, 3); // [2, 3]
// console.log(newArr);

// foreach()
// myArray.forEach(element => {
//   console.log(element * 5)
// });

const map = myArray.map((v,i) =>{
  k = v+9+i;
  // console.log(k)
  
})
// console.log(map);

const arrr = [1, 3, 4, 5, 6, 7, 8];

 const arrr1 = arrr.filter(element => element>=5);
// console.log(arrr1);

const found = arrr.find( num => num % 2 == 0);
console.log(found);

const index = arrr.findIndex(num => num == 5)
console.log(index);

// some,every,sort,reverse

const myName = "Mozahid";
myNameArray = [...myName];
console.log(myNameArray);
myNameArray.reverse();
console.log(myNameArray);


