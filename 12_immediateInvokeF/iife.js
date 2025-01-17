// immediatly invoked funtion Expression

// 1.Named IIFE
(function chai() {
  console.log("DB connected");

})();
  // chai();

  // 2.IIFE
  ((name) => {
    console.log(`DB connected two ${name}`);
    
  })("Sweety");