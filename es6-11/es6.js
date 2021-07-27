// 1. Shorthand property names
{
  const name = "Liv";
  const age = 18;

  //Original
  const ellie = {
    name: name,
    age: age,
  };

  //If key and value are same
  const ellie = {
    name,
    age,
  };
}
// 2. Destructuring assignment
{
  const { name, level } = student;
  const { studentName, studentLevel } = student;
}

// 3. Spread Syntax
// array copy
{
  const array = [obj1, obj2];
  const arrayCopy = [...array];
  // add array
  const arrayCopy2 = [...array, { key: "key3" }];
  // array concatenation
  const fruits1 = ["apple", "pineapple"];
  const fruits2 = ["banana", "kiwi"];
  const fruits = [...fruits1, ...fruits2];
}

// 4. Default parameters
{
  {
    function printMessage(message = "default message") {
      console.log(message);
    }
    printMessage("hello");
    printMessage();
  }
}

// 5. Ternary Operator
{
  {
    const component = isCat ? "cat" : "dog";
  }
}

// 6. Template Literals
{
  {
    console.log(
      `Today weather is ${weather} and temperature is ${temperature}`
    );
  }
}
