function three() {
    console.log("Last! Haha");
   }
   function two() {
    three();
   }
   function one() {
    two();
   }
   function zero() {
    one();
   }
   
   zero();