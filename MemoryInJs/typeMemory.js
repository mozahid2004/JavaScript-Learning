// stack (primitive) , Heap (refrence)

// Stack Memory give copy to another variable it doesnt change in orginal value;
let myName = "Mozahid";
let myAnotherName = myName;
myAnotherName  = "Sahil";
// console.log(myName);
// console.log(myAnotherName);


// it chnage original vlaue from the variable

let Sweety = {
    name: "Sweety",
    age: 18,
    favFood: ["Chicken","Briyani","Ice-cream"]
}



let Mozahid = {
    name: "Mozahid",
    age: 20,
    favFood: ["anda","aloo","chips"]
}
Mozahid = Sweety;
Mozahid.name = "Meri Pyari ........"

console.log(Sweety);
console.log(Mozahid);
