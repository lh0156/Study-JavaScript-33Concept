function three() {
    console.log("Last! Haha");
    throw Error("에러가 발생했습니다.");

   }
   function two() {
    three();
   }
   function one() {
    two();
   }
   function zero() {
    one();   }
   
   zero();