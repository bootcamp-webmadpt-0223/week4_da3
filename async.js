// JS single thread

// Build a timer that every 1 second prints "X seconds" and stops at 10.
console.log("start!");
let counter = 0;
const timeout = 1000;
const max = 10;

const addToCounter = () => {
  if (counter < max) {
    counter++;
    console.log(counter);
    setTimeout(addToCounter, timeout);
  }
};

const timeoutId = setTimeout(addToCounter, timeout);

// clearTimeout(timeoutId);

console.log("end!");
