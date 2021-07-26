// number, string, bollean, null, undefined

// object
const obj = {
  name: "Liv",
  age: 4,
};

obj.name = "ellie";
console.log(obj.name);

//function
function add(num1, num2) {
  return num1 + num2;
}

const sum = add(3, 4);

//false : 0, -0, '', null, undefined
//true : -1, 'hello', [], ...
if (false) {
  console.log("true!");
} else {
  console.log("false!");
}

class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomething(number) {
  console.log(`Yeah! ${number}`);
}

const collCounter = new Counter(printSomething);
collCounter.increase();
