"use strict";

// JavaScript is synchronous
// Execute the code block in orger hoisting
// hoisting : var, function declaration etc... are going automatically to the top
console.log("1"); //sync
setTimeout(() => console.log("2"), 1000); //async
console.log("3"); //sync

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello")); //sync

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("aync callback"), 2000); //async

//Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "liv" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "liv") {
        onSuccess({ name: "liv", role: "admin" });
      } else {
        onError(new Error("not access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a  ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
