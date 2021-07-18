// JSON
// JavaScript Object Notation

// 1.Object to JSON
// stringify(obj)
let json = JSON.stringify(["apple", "banana"]);

// 2. JSON to Object
// parse(json)
const rabbit = {
  name: "liv",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump~`);
  },
};

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
const obj2 = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : nalue;
});

// 유용한 사이트:
// JSON Diff checker: http://www.jsondiff.com/
// JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON Parser: https://jsonparser.org/
// JSON Validator: https://tools.learningcontainer.com/json-validator/
