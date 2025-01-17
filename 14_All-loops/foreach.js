const coding = ["Js","ruby","Java","Python",]

// coding.forEach((prog)=>{
//   console.log(prog);
  
// })

// other way to write
function printMe(item,index,arr){
  console.log(item,index,arr)
}
// coding.forEach(printMe)


const myCoding = [
  {
    name: "Mozahid",
    course: "BCA"
  },
  {
    name: "Sahil",
    course: "B.Tech"
  },
  {
    name: "Arif",
    course: "B.Pharma"
  },
  {
    name: "Raju",
    course: "B.sc (Mathematics)"
  },
]

myCoding.forEach((Object) => {
  console.log(Object.name);
  
})
