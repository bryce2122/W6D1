function currySum(numArgs) {
const numbers = [];
let sum = function(arg) {
  numbers.push(arg);
if (numArgs === numbers.length) {

  let final = numbers.reduce((acc,el) => {

    return acc + el;

  });
  return final;
}

else  {
  return sum;

}


};

return sum;

}

//
// let sum = currySum(4);
// console.log(sum(5)(6)(7)(8));

Function.prototype.curry = function (numArgs) {
  let that = this;
    const numbers = [];
  let curryHelper = function(arg) {
    numbers.push(arg);
    // console.log(numbers);
    if (numArgs === numbers.length) {
      return that.apply(null, numbers);
      // console.log(this);
      // return that(...numbers);
      // return "hi";
    }

    else {
      return curryHelper;
    }
  };
  return curryHelper;
};

function hello(...args) {
  args.forEach(el => console.log(el));
  // console.log(args);
  // console.log(arg2);
  return 'hello';
}

let gs = hello.curry(3);
console.log(gs(1)(4)(5));
//
//
// function sum() {
//   let arr = Array.from(arguments);
//   let total = arr.reduce((accu, el) => {
//     return accu + el;
//   });
//   return total;
// }
//
// // console.log(sum(5, 4 ,3, 2));
//
// function sum_rest(...args) {
//   let total = args.reduce((accu, el) => {
//     return accu + el;
//   });
//   return total;
// }
//
// // console.log(sum_rest(5, 4 ,3, 2));
//
// simple myBind with no args
// Function.prototype.myBind = function (ctx) {
//   return () => this.apply(ctx);
// };

// myBind with arguments
// Function.prototype.myBind = function (ctx) {
//   return (...callArgs) => {
//     return this.apply(ctx, callArgs);
//   };
// };

//
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   meow(person,verb) {
//     console.log(`${this.name} says meow to ${person}${verb}!`);
//   }
// }
//
// const curie = new Cat("Curie");
// curie.meow.myBind(curie)("Ned","Happily");
//
//

//

// Function.prototype.ok = function() {
//
//  return
//   console.log(this);
// };
//
// function curry() {
//
//   console.log("ok");
// }
//
// curry.ok();

// class Animal{
//   constructor(name,color) {
//     this.name = name;
//     this.color = color;
//   }
//
//
// }
//
//
//
//
//
//
//
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   meow(person,verb) {
//
//   }
// }
//
// var newFunction = function() {
//
//   console.log("hello");
//
// };
//
// const cat = new Cat();
// cat.prototype = Object.create(Animal);
//
// console.log(cat.prototype);
