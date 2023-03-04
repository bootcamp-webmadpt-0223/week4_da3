// Primitives: Value
let a = 3;
let b = a;
a = 4;
let c = "3";

if (a === b) {
  console.log("a & b iguales!");
}

if (b == c) {
  console.log("b & c iguales!");
}

function addOne(n) {
  n += 1;
  console.log(n);
}

addOne(b);
console.log(b);

// Non-primitives: Reference / == vs ===
let o = { name: "Pepe" };
let w = { name: "Jon" };
let temp = w;
w = o;
o.name = "Changed name";
let z = { name: "Pepe" };

console.log(w, temp);

if (o === w) {
  console.log("o & w iguales!");
}

if (o === z) {
  console.log("o & z iguales!");
}

if (o == z) {
  console.log("2.o & z iguales!");
}

const user = { name: "My name" };

function addAddress(obj) {
  obj.address = "My address";
}

addAddress(user);
// console.log(user);

// Copy objects. Object.assign / for...in / JSON.parse / spread operator
const myUser = {
  name: "my name",
  age: 25,
  address: "my address",
  hobbies: ["dance"],
};

function cloneArray(arr) {
  return arr.map((element) => {
    if (Array.isArray(element)) {
      return cloneArray(element);
    }
    if (typeof element === "object") {
      return cloneObject(element);
    }

    return element;
  });
}

function cloneObject(obj) {
  const myUserCopy = {};
  for (let key in myUser) {
    if (Array.isArray(myUser[key])) {
      myUserCopy[key] = cloneArray(myUser[key]);
      continue;
    }
    if (typeof myUser[key] === "object") {
      const myUserCopy = cloneObject(myUser[key]);
      continue;
    }

    myUserCopy[key] = myUser[key];
  }
  return myUserCopy;
}

const userCopy = cloneObject(user);
userCopy.lastName = "my last name";
userCopy.hobbies.push("beer");
myUser.hobbies.push("party");

console.log(myUser, userCopy);

const clone = structuredClone([]);
console.log(clone);

const jsonCopy = JSON.parse(JSON.stringify(myUser));

console.log(jsonCopy);

const assignCopy = Object.assign({}, myUser);

console.log(assignCopy);

const spreadCopy = { ...myUser, phone: "34534785" };

console.log(spreadCopy);

// Copy arrays. map / slice / for / spread operator
const messages = ["This", "is", "a", "message"];
const spreadMsg = [...messages];
const sliceMsg = messages.slice(0);
const mapMsg = messages.map((e) => e);

console.log(spreadMsg);

const jsonMsg = JSON.parse(JSON.stringify(messages));

console.log(jsonMsg);

const structuredMsg = structuredClone(messages);

console.log(structuredMsg);

// Array immutable methods. map, filter, slice, reduce
// Array mutable methods. sort, reverse, splice

// Object mutable methods. delete
// Object immutable methods. spread operator
