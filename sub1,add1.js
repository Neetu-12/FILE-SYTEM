// var opr=require("./sub,add")

// var {add1,sub1,mult1,name}=require("./sub,add")//here using destructuring form ES6...!!!
// console.log(opr);
// console.log(opr.add1(8,3));
// console.log(opr.sub1(5,3));
// console.log(opr.mullt1(5,3));


// 2)) Methods
var {add,sub,mult,name}=require("./sub,add")//here using destructuring form ES6...!!!
console.log(add(8,3));
console.log(sub(5,3));
console.log(mult(5,3));
console.log(name);

