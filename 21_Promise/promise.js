// 1. Promise**********************************************

const promiseOne = new Promise(function (resolve, reject) {
  // Do and async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log('Async task is completed');
    resolve()
  }, 4000)
});


promiseOne.then(function () {
  console.log('Promise consumed');

})

// 2.Promise===============================================

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Async task One Completed')
    resolve()
  }, 2000);
}).then(function () {
  console.log('Onne Connsumed');
})

// Promise Three******************************************

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: 'Mozahid', email: 'mozahid@gamil.com' })
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user.username)

})

// promise Four******************************************

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Mozahid", password: "123456" })
    } else {
      reject('ERROR : Something is wrong')
    }
  }, 1000);
})

promiseFour.then((user) => {
  console.log(user);
  return user.username;
}).then((username) => {
  console.log(username);

}).catch(function (err) {
  console.log(err);

}).finally(() => {
  console.log('kuch to ho gya bhai');
})


// promise five ******************************************

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {

    let error = false;
    if (!error) {
      resolve({ username: "JavaScript", password: "00000" })
    } else {
      reject('ERROR : Anaconda is wrong')
    }
  }, 1000);

})


async function consumePromiseFive() {

  try {
    const reponse = await promiseFive
    console.log(reponse);
  } catch (error) {
    console.log(error);
  }



}

consumePromiseFive()

// *************************************************

// async function getAllUser() {
//   try {
//     const respose = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await respose.json()
//     console.log(data);
//   } catch (error) {
//     console.log('R : ', error);
//   }
// }
// getAllUser();

// const getAllUser = new Promise(function(resolve,reject){
//   const response = fetch('https://jsonplaceholder.typicode.com/users')
//   resolve(response);
// })



// *******************************************************

fetch('https://jsonplaceholder.typicode.com/users')
.then((reponse)=>{
    return reponse.json();
}).then((data)=>{
  console.log(data);
  
})
.catch((error)=>{
  console.log(error);
  
})