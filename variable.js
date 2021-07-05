"use strict";
// 1. Use Strict
// added in ES5
// use this for Valina JavaScript

// 2. Variable
// let (added in ES6, mutable)
// var (don't ever use this!)
// var hoisting (move declaration from bottom to top, has no block scope)
// hoisting : 어디에 선언했느냐에 상관없이 항상 제일 위로 끌어올리는 것)
let name = "Liv";
console.log(name);

// 3. Constants
// favor immutable data type always for a few reasons;
// -security
// -thread safety
// -reduce human mmistakes
// 한 번 선언 및 할당하면 절대 값이 바뀌지 않는 것

// 4. Variable types
// primitive, single item : number, string, boolean ,null, undefined, symbol
// object, real-life object, data structure, box container
// function, first-class function(function도 다른 데이터 타입처럼 할당, 리턴 가능)
// number - special numeric values: infinity , -infinity, NaN
// bigInt (fairly new, don't use it yet)
// string, template literals(`와 $를 사용해서 string을 출력)
// boolean (false, true)
// null, undefined(선언은 되어있지만 값이 지정되어 있지 않은 상태)
// symbol, create unique identifiers for objects(고유한 식별자)

// 5. Dynamic typing : dynamically typed language
// 프로그램 동작시(런타임)에 타입이 변경될 수 있음
