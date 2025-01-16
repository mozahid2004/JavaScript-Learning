


if (true) {
  let a = 10;
  const b = 10;
  var c = 30; //you can access this c variable outside this if block which is not goot it pollute the global  scope variable;
}

// console.log(a);
// console.log(b);
// console.log(c);//Assecing the c 

// nested scope 
function one(){
  const userName = "Mozahid"
  function two(){
    const website = "YouTube"
    console.log(userName);
  }

  // console.log(website);

  two();
  
}
one()