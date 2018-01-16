Function.prototype.curry = function(ctx) {
  const numbers = [];

  return this.apply(ctx, )




};


function curry() {

  function print(num) {


    console.log(num);
  }

return print;

}

const print = curry();
print(3);

/ function curry_sum(numArgs) {
const numbers = [];
let curry_me = function(arg) {
  numbers.push(arg);
if (numArgs === numbers.length) {
 return this.apply(numbers);
  this
 )

}

else  {
 return curry_me
}


};

return curry_me;

// }
