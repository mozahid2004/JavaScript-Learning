

function sayMyName() {
  console.log('M');
  console.log('O');
  console.log('J');
  console.log('A');
  console.log('H');
  console.log('I');
  console.log('D');
}

// sayMyName()

// function sumNumber(a,b) {
//   let c = a + b;
//   console.log(c);
// }
function sumNumber(a,b) {
  let c = a + b;
  return c
}

// const result = sumNumber(11,90);
// console.log(result);

function loginUserMassage(userName){
  return `${userName}  just logged in!!!!`;
}

const name = loginUserMassage("Mozahid")

// console.log(name);
// rest param
function calculateCartPrize(...num1){
  return num1;
}
// console.log(calculateCartPrize(200,30,300,400));


// print sectond value of an array

const myNumbers = [100,2030,400,599,1000]

function printSecondValue(getValue){
  return getValue[1]
}
// similary like arrray we can pass object and direct object and array without storing it in variable;
console.log(printSecondValue(myNumbers));
