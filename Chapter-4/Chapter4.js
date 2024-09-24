/*
let ListOfNumbers = [2, 3, 5, 7, 11];
//most datasets, expecially Arrays, arrange numbers as (0,1,2,3...) (rather than 1,2,3...)
console.log(ListOfNumbers[0]);
console.log(ListOfNumbers[3]);
console.log(ListOfNumbers[4]);

//things have properties, null/undifined tend to not have properties

let doh= "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

let sequence=[1, 2, 3];
sequence.push(4); /* .push adds values to the end of an array */
/*
sequence.push(5);
console.log(sequence);
console.log(sequence.pop()); /* .pop removes the lastalue in an array */
/*
console.log(sequence);
console.log(sequence.pop(2)); /* a value within the () of .pop doesn't seem to remove a chosen value */
/*
console.log(sequence);


/* HOLLY $HIT IT'S OBJECTS YIPPPPEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE*/
                                                                                                /* SQUIRREL TIME */
                                                                                          /* Thank god this is not python */
/*

let day1 ={
    squirrel :false,
    events: ["work", "touched tree","pizza","running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

*/





                                                                        /* Okay enough notes, here are the Examples! */


// The Sum of a Range

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}
function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));


//Reversing an Array

function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  console.log(reverseArray(["A", "B", "C"]));
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);

// A List

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  function prepend(value, list) {
    return {value, rest: list};
  }
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  console.log(arrayToList([10, 20]));
  console.log(listToArray(arrayToList([10, 20, 30])));
  console.log(prepend(10, prepend(20, null)));
  console.log(nth(arrayToList([10, 20, 30]), 1));

  //Deep Comparison
  
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;
  let keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length != keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));