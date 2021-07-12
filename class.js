"use strict";
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// -syntactical sugar over prototype-based inheritance

// 1.Class Declarations
class Person {
  // constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello ! `);
  }
}

// 2. Getter and Setters
// 3. Field (public, private)
// 4. Static properties and methods
// 5. Inheritance - a way for one class to extend another class
// 6. InstanceOf - Class checking
