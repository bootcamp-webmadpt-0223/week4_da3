// Scope
let a = 3;
var d = 33;
function saySometing() {
  console.log(a);
  let b = 22;
  function sayHello() {
    console.log(b);
  }

  if (true) {
    let c = 999;
    console.log(a, b, c);
    var d = 22;
  }

  for (let i = 0; i < 3; i++) {
    console.log(i);
    // console.log(c); Error
  }

  console.log(d);
  //   console.log(c); Error
  //   console.log(i); Error

  sayHello();
}

saySometing();
// console.log(b); Error

var x = 1;
var x = 5;
x = 2;

let y = 1;
// let y = 1;
y = 2;

const z = 1;
// z += 2;
// const z = 1;
// y = 2;z

console.log(d);

// Hoisting

console.log(varMessage);
var varMessage = undefined;

// console.log(letMessage); Error
let letMessage = undefined;
console.log(letMessage);

// Shadowing

let s = "s";

function addToS() {
  // let s = "sss" New variable
  s = "sss"; // Parent s
  console.log(s);
}

addToS();

console.log(s);
