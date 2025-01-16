const user = {
    username: "Sahil",
    price: 999,
    welcomeMessage: function(){
      console.log(`${this.username} , welCome to website`)
    }
}
// console.log(user);
// console.log(user.welcomeMessage())

// user.welcomeMessage()


const addTwo = (num1, num2 ) => {
  return num1+num2;
}
console.log(addTwo(9,8));

// implicit return

// const multiplyTwo = (num1, num2) => num1 * num2
// use in react.............
const multiplyTwo = (num1, num2) => (num1 * num2)
console.log(multiplyTwo(9,4));


// to return object with Arrow Funtion
// (parenthesis lagake hi return karega)
const ObjectReturn = () => ({username: "Mozahid"})

console.log(ObjectReturn());



