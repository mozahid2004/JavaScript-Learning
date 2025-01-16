// Singleton

// object literals

const JsUser = {
  name:"Mozahid",
  "full name": "Mozahid Izhar",
  mob:8260760645,
  email:"mozahid@gamol.com",
  age:16,
  isLoggedIn:  false,
  lastLoginDay : ["mon","tue"]
}

// Accesss the name
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name","age"]);


// Destucture in object 

const course = {
  coursename: "Java",
  price:999,
  courseInstructor: "King"
}

// course.courseInstructor

const {courseInstructor} = course;

console.log(courseInstructor);


