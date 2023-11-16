console.clear();
/// Slice
const animals = ["ant", "bison", "camel", "duck", "elephant"];

Array.prototype._slice = function (start = 0, end = this.length) {
  const data = [];
  if (start < 0) start += this.length;
  if (end < 0) end += this.length;
  if (end < start) end = start;

  for (let i = start; i < end; i++) {
    // data[data.length] = this[i] // one way to push data to the end of an array
    data.push(this[i]);
  }
  return data;
};

// runTests(() => {
//   if (!Array.prototype._slice) {
//     throw new Error("❌ _slice method is undefined");
//   } else {
//     assert(animals._slice(2), ["camel", "duck", "elephant"]);
//     assert(animals._slice(2, 4), ["camel", "duck"]);
//     assert(animals._slice(1, 5), ["bison", "camel", "duck", "elephant"]);
//     assert(animals._slice(-2), ["duck", "elephant"]);
//     assert(animals._slice(2, -1), ["camel", "duck"]);
//     assert(animals._slice(), ["ant", "bison", "camel", "duck", "elephant"]);
//   }
// }, "_slice method");

/// Reduce
const array1 = [1, 2, 3, 4];
const getMax = (a, b) => Math.max(a, b);
const add = (a, b) => a + b;

Array.prototype._reduce = function (func, initialVal) {
  let accumulator = initialVal === undefined ? this[0] : initialVal;
  const currentval = initialVal === undefined ? 1 : 0;

  for (let i = currentval; i < this.length; i++) {
    accumulator = func(accumulator, this[i]);
  }

  return accumulator;
};

// runTests(() => {
//   if (!Array.prototype._reduce) {
//     throw new Error("❌ _reduce method is undefined");
//   } else {
//     assert(array1._reduce(add), 10);
//     assert(array1._reduce(add, 0), 10);
//     assert(array1._reduce(add), 10);
//     assert([1, 100]._reduce(getMax, 50), 100);
//     assert([50]._reduce(getMax, 10), 50);
//     assert([1, 100]._reduce(getMax), 100);
//     assert([50]._reduce(getMax), 50);
//     assert([]._reduce(getMax, 1), 1);
//   }
// }, "_reduce method");

/// FlatMap
const arr2 = [1, 2, 1];
const arr3 = [1, 2, 3, 4];

Array.prototype._flatMap = function () {
  const data = [];
};

// runTests(() => {
//   if (!Array.prototype._flatMap) {
//     throw new Error("❌ _flatMap method is undefined");
//   } else {
//     assert(arr2._flatMap((num) => (num === 2 ? [2, 2] : 1)), [1, 2, 2, 1]);
//     assert(arr3._flatMap((x) => [x, x * 2]), [1, 2, 2, 4, 3, 6, 4, 8])
//   }
// }, "_flatMap method");

/// Flat
const arr4 = [0, 1, 2, [3, 4]];
const arr5 = [0, 1, [2, [3, [4, 5]]]];

Array.prototype._flat = undefined;

// runTests(() => {
//   if (!Array.prototype._flat) {
//     throw new Error("❌ _flat method is undefined");
//   } else {
//     assert(arr4._flat(), [0, 1, 2, 3, 4]);
//     assert(arr5._flat(), [0, 1, 2, [3, [4, 5]]]);
//     assert(arr5._flat(2), [0, 1, 2, 3, [4, 5]]);
//     assert(arr5._flat(Infinity), [0, 1, 2, 3, 4, 5]);
//   }
// }, "_flat method");

/// Concat
const arr6 = ["a", "b", "c"];
const arr7 = ["d", "e", "f"];
const letters1 = ["a", "b", "c"];

Array.prototype._concat = undefined;

// runTests(() => {
//   if (!Array.prototype._concat) {
//     throw new Error("❌ _concat method is undefined");
//   } else {
//     assert(arr6._concat(arr7), ["a", "b", "c", "d", "e", "f"]);
//     assert(arr6._concat(arr7, arr6), [
//       "a",
//       "b",
//       "c",
//       "d",
//       "e",
//       "f",
//       "a",
//       "b",
//       "c"
//     ]);
//     assert(letters1._concat(1, [2, 3]), ["a", "b", "c", 1, 2, 3]);
//   }
// }, "_concat method");

// Splice
const months = ["Jan", "March", "April", "June"];
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const myFish2 = ["angel", "clown", "mandarin", "sturgeon"];
const myFish3 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const myFish4 = ["angel", "clown", "drum", "sturgeon"];
const myFish5 = ["angel", "clown", "trumpet", "sturgeon"];
const myFish6 = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const myFish7 = ["angel", "clown", "mandarin", "sturgeon"];
const myFish8 = ["angel", "clown", "mandarin", "sturgeon"];

Array.prototype._splice = undefined;

// runTests(() => {
//   if (!Array.prototype._splice) {
//     throw new Error("❌ _splice method is undefined");
//   } else {
//     // -- months
//     const removedMonths1 = months._splice(1, 0, "Feb");
//     assert(months, ["Jan", "Feb", "March", "April", "June"]);
//     assert(removedMonths1, []);
//     const removedMonths2 = months._splice(4, 1, "May");
//     assert(months, ["Jan", "Feb", "March", "April", "May"]);
//     assert(removedMonths2, ["June"]);

//     // -- fish
//     const removedFish1 = myFish._splice(2, 0, "drum");
//     assert(myFish, ["angel", "clown", "drum", "mandarin", "sturgeon"]);
//     assert(removedFish1, []);

//     const removedFish2 = myFish2._splice(2, 0, "drum", "guitar");
//     assert(myFish2, [
//       "angel",
//       "clown",
//       "drum",
//       "guitar",
//       "mandarin",
//       "sturgeon"
//     ]);
//     assert(removedFish2, []);

//     const removedFish3 = myFish3._splice(3, 1);
//     assert(myFish3, ["angel", "clown", "drum", "sturgeon"]);
//     assert(removedFish3, ["mandarin"]);

//     const removedFish4 = myFish4._splice(2, 1, "trumpet");
//     assert(myFish4, ["angel", "clown", "trumpet", "sturgeon"]);
//     assert(removedFish4, ["drum"]);

//     const removedFish5 = myFish5._splice(0, 2, "parrot", "anemone", "blue");
//     assert(myFish5, ["parrot", "anemone", "blue", "trumpet", "sturgeon"]);
//     assert(removedFish5, ["angel", "clown"]);

//     const removedFish6 = myFish6._splice(2, 2);
//     assert(myFish6, ["parrot", "anemone", "sturgeon"]);
//     assert(removedFish6, ["blue", "trumpet"]);

//     const removedFish7 = myFish7._splice(-2, 1);
//     assert(myFish7, ["angel", "clown", "sturgeon"]);
//     assert(removedFish7, ["mandarin"]);

//     const removedFish8 = myFish8._splice(2);
//     assert(myFish8, ["angel", "clown"]);
//     assert(removedFish8, ["mandarin", "sturgeon"]);
//   }
// }, "_splice method");

/// Fill

/// Fill
const numbers = [1, 2, 3, 4, 5];

Array.prototype._fill = undefined;

// runTests(() => {
//   if (!Array.prototype._fill) {
//     throw new Error("❌ _fill method is undefined");
//   } else {
//     const arr1 = [...numbers];
//     arr1._fill(0, 2, 4);
//     assert(arr1, [1, 2, 0, 0, 5]);

//     const arr2 = [...numbers];
//     arr2._fill(7, 1);
//     assert(arr2, [1, 7, 7, 7, 7]);

//     const arr3 = [...numbers];
//     arr3._fill(8);
//     assert(arr3, [8, 8, 8, 8, 8]);

//     const arr4 = [...numbers];
//     arr4._fill(9, -3, -1);
//     assert(arr4, [1, 2, 9, 9, 5]);
//   }
// }, "_fill method");

/// At
const items = ["a", "b", "c", "d", "e"];

Array.prototype._at = undefined;

// runTests(() => {
//   if (!Array.prototype._at) {
//     throw new Error("❌ _at method is undefined");
//   } else {
//     assert(items._at(0), "a");
//     assert(items._at(2), "c");
//     assert(items._at(-1), "e");
//     assert(items._at(-2), "d");
//     assert(items._at(10), undefined);
//   }
// }, "_at method");

/// Map
const numbers2 = [1, 4, 9, 16];

Array.prototype._map = function (func) {
  const data = [];

  for (let i = 0; i < this.length; i++) {
    data.push(func(this[i], i, this));
  }

  return data;
};

// runTests(() => {
//   if (!Array.prototype._map) {
//     throw new Error("❌ _map method is undefined");
//   } else {
//     assert(numbers2._map(x => x * 2), [2, 8, 18, 32]);
//     assert(numbers2._map((x, i) => x + i), [1, 5, 11, 19]);
//     assert(numbers2._map((x, i) => x * i), [0, 4, 18, 48]);
//     assert(numbers2._map((x, _, arr) => x + arr[0]), [2, 5, 10, 17]);
//     assert(numbers2._map((x, i, arr) => x + arr[i]), [2, 8, 18, 32]);
//   }
// }, "_map method");

/// Filter
const numbers3 = [1, 4, 9, 16, 25];

Array.prototype._filter = function (func) {
  const data = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) data.push(this[i]);
  }

  return data;
};

// runTests(() => {
//   if (!Array.prototype._filter) {
//     throw new Error("❌ _filter method is undefined");
//   } else {
//     assert(
//       numbers3._filter((x) => x % 2 === 0),
//       [4, 16]
//     );
//     assert(
//       numbers3._filter((x, i) => x >= i * 5),
//       [1, 16, 25]
//     );

//     assert(
//       numbers3._filter((x, _, arr) => x < arr[2]),
//       [1, 4]
//     );
//     assert(
//       numbers3._filter((x, i) => i % 2 === 0),
//       [1, 9, 25]
//     );
//     assert(
//       numbers3._filter((x, i, arr) => x > arr[i - 1]),
//       [4, 9, 16, 25]
//     );
//   }
// }, "_filter method");

/// Some
const numbers4 = [1, 4, 9, 16, 25];

Array.prototype._some = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) return true;
  }

  return false;
};

// runTests(() => {
//   if (!Array.prototype._some) {
//     throw new Error("❌ _some method is undefined");
//   } else {
//     assert(numbers4._some(x => x % 2 === 0), true);
//     assert(numbers4._some((x, i) => x === i * 5), false);
//     assert(numbers4._some((x, _, arr) => x > arr[3]), true);
//     assert(numbers4._some((x, i) => i % 6 === 0), true);
//     assert(numbers4._some((x, i, arr) => x < arr[i-1]), false);
//   }
// }, "_some method");

/// Shift
const items2 = ["a", "b", "c", "d", "e"];

Array.prototype._shift = function () {
  const data = [];
  const removedElement = this[0];

  for (let i = 1; i < this.length; i++) {
    data.push(this[i]);
  }

  this.length = 0;
  this.push(...data);

  return removedElement;
};

// runTests(() => {
//   if (!Array.prototype._shift) {
//     throw new Error("❌ _shift method is undefined");
//   } else {
//     const arr1 = [...items2];
//     assert(arr1._shift(), "a");
//     assert(arr1, ["b", "c", "d", "e"]);

//     const arr2 = [...items2];
//     arr2._shift();
//     arr2._shift();
//     assert(arr2, ["c", "d", "e"]);

//     const arr3 = [...items2];
//     arr3._shift();
//     arr3._shift();
//     arr3._shift();
//     arr3._shift();
//     arr3._shift();
//     assert(arr3._shift(), undefined);
//   }
// }, "_shift method");

/// FindLast
const numbers5 = [1, 4, 9, 4, 16, 25];

Array.prototype._findLast = function (func) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (func(this[i], i, this)) return this[i];
  }
};

// runTests(() => {
//   if (!Array.prototype._findLast) {
//     throw new Error("❌ _findLast method is undefined");
//   } else {
//     assert(
//       numbers5._findLast((x) => x % 2 === 0),
//       16
//     );
//     assert(
//       numbers5._findLast((x) => x === 4),
//       4
//     );
//     assert(
//       numbers5._findLast((x, i) => i < 3),
//       9
//     );
//     assert(
//       numbers5._findLast((x, _, arr) => x < arr[3]),
//       1
//     );
//     assert(
//       numbers5._findLast((x) => x > 50),
//       undefined
//     );
//   }
// }, "_findLast method");

/// Every
const numbers6 = [2, 4, 6, 8, 10];

Array.prototype._every = function (func) {
  const data = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) data.push(this[i]);
  }

  return this.length === data.length;
};

// runTests(() => {
//   if (!Array.prototype._every) {
//     throw new Error("❌ _every method is undefined");
//   } else {
//     assert(numbers6._every(x => x % 2 === 0), true);
//     assert(numbers6._every(x => x < 10), false);
//     assert(numbers6._every((x, i) => x > i), true);
//     assert(numbers6._every((x, _, arr) => x <= arr[4]), true);
//     assert(numbers6._every((x, i, arr) => x >= arr[i-1] || i === 0), true);
//   }
// }, "_every method");

/// Join
const elements = ["Fire", "Air", "Water", "Earth"];

Array.prototype._join = undefined;

// runTests(() => {
//   if (!Array.prototype._join) {
//     throw new Error("❌ _join method is undefined");
//   } else {
//     assert(elements._join(), "Fire,Air,Water,Earth");
//     assert(elements._join(''), "FireAirWaterEarth");
//     assert(elements._join('-'), "Fire-Air-Water-Earth");
//     assert(elements._join(' + '), "Fire + Air + Water + Earth");
//     assert(elements._join('🔥'), "Fire🔥Air🔥Water🔥Earth");
//   }
// }, "_join method");

/// Includes
const fruits = ["apple", "banana", "mango", "grape", "orange"];

Array.prototype._includes = undefined;

// runTests(() => {
//   if (!Array.prototype._includes) {
//     throw new Error("❌ _includes method is undefined");
//   } else {
//     assert(fruits._includes("banana"), true);
//     assert(fruits._includes("watermelon"), false);
//     assert(fruits._includes("apple", 1), false);
//     assert(fruits._includes("mango", 2), true);
//     assert(fruits._includes("grape", -2), true);
//   }
// }, "_includes method");

/// Find
const numbers7 = [5, 12, 8, 130, 44];

Array.prototype._find = undefined;

// runTests(() => {
//   if (!Array.prototype._find) {
//     throw new Error("❌ _find method is undefined");
//   } else {
//     assert(numbers7._find(x => x > 10), 12);
//     assert(numbers7._find(x => x < 0), undefined);
//     assert(numbers7._find((x, i) => i === 3), 130);
//     assert(numbers7._find((x, _, arr) => x === arr[2]), 8);
//     assert(numbers7._find((x, i, arr) => x > arr[i-1] || i === 0), 5);
//   }
// }, "_find method");

/// Unshift
const items3 = [3, 4, 5];

Array.prototype._unshift = undefined;

// runTests(() => {
//   if (!Array.prototype._unshift) {
//     throw new Error("❌ _unshift method is undefined");
//   } else {
//     const arr1 = [...items3];
//     arr1._unshift(1, 2);
//     assert(arr1, [1, 2, 3, 4, 5]);

//     const arr2 = [...items3];
//     arr2._unshift(0);
//     assert(arr2, [0, 3, 4, 5]);

//     const arr3 = [...items3];
//     arr3._unshift();
//     assert(arr3, [3, 4, 5]);

//     const arr4 = [];
//     arr4._unshift(7);
//     assert(arr4, [7]);

//     const arr5 = [...items3];
//     const length = arr5._unshift(1, 2);
//     assert(length, 5);
//   }
// }, "_unshift method");

/// LastIndexOf
const numbers8 = [1, 2, 3, 2, 1];

Array.prototype._lastIndexOf = undefined;

// runTests(() => {
//   if (!Array.prototype._lastIndexOf) {
//     throw new Error("❌ _lastIndexOf method is undefined");
//   } else {
//     assert(numbers8._lastIndexOf(1), 4);
//     assert(numbers8._lastIndexOf(2), 3);
//     assert(numbers8._lastIndexOf(3), 2);
//     assert(numbers8._lastIndexOf(4), -1);
//     assert(numbers8._lastIndexOf(2, 2), 1);
//     assert(numbers8._lastIndexOf(1, 2), 0);
//   }
// }, "_lastIndexOf method");

/// IndexOf
const colors = ["red", "green", "blue", "green", "yellow"];

Array.prototype._indexOf = undefined;

// runTests(() => {
//   if (!Array.prototype._indexOf) {
//     throw new Error("❌ _indexOf method is undefined");
//   } else {
//     assert(colors._indexOf("red"), 0);
//     assert(colors._indexOf("green"), 1);
//     assert(colors._indexOf("blue"), 2);
//     assert(colors._indexOf("purple"), -1);
//     assert(colors._indexOf("green", 2), 3);
//     assert(colors._indexOf("yellow", 4), 4);
//   }
// }, "_indexOf method");

/// FindLastIndex
const numbers9 = [5, 12, 8, 130, 44, 8];

Array.prototype._findLastIndex = undefined;

// runTests(() => {
//   if (!Array.prototype._findLastIndex) {
//     throw new Error("❌ _findLastIndex method is undefined");
//   } else {
//     assert(numbers9._findLastIndex(x => x > 10), 4);
//     assert(numbers9._findLastIndex(x => x < 0), -1);
//     assert(numbers9._findLastIndex((x, i) => i === 3), 3);
//     assert(numbers9._findLastIndex((x, _, arr) => x === arr[2]), 5);
//     assert(numbers9._findLastIndex((x, i, arr) => x < arr[i-1] || i === 0), 5);
//   }
// }, "_findLastIndex method");

/// FindIndex
const numbers10 = [5, 12, 8, 130, 44];

Array.prototype._findIndex = Array.prototype.findIndex;

// runTests(() => {
//   if (!Array.prototype._findIndex) {
//     throw new Error("❌ _findIndex method is undefined");
//   } else {
//     assert(numbers10._findIndex(x => x > 10), 1);
//     assert(numbers10._findIndex(x => x < 0), -1);
//     assert(numbers10._findIndex((x, i) => i === 3), 3);
//     assert(numbers10._findIndex((x, _, arr) => x === arr[2]), 2);
//   }
// }, "_findIndex method");

/// ForEach
const letters = ["a", "b", "c", "d"];

Array.prototype._forEach = undefined;

// runTests(() => {
//   if (!Array.prototype._forEach) {
//     throw new Error("❌ _forEach method is undefined");
//   } else {
//     let result1 = "";
//     letters._forEach(item => result1 += item);
//     assert(result1, "abcd");

//     let result2 = "";
//     letters._forEach((item, index) => result2 += item + index);
//     assert(result2, "a0b1c2d3");

//     let result3 = "";
//     letters._forEach((item, index, arr) => result3 += item + arr[index]);
//     assert(result3, "aabbccdd");
//   }
// }, "_forEach method");

/// Reverse
const numbers11 = [1, 2, 3, 4, 5];

Array.prototype._reverse = function () {
  const data = [];
  for (let i = this.length - 1; i >= 0; i--) {
    data.push(this[i]);
  }
  console.log(data);
  this.length = 0;
  this.push(...data);
  return data;
};

// runTests(() => {
//   if (!Array.prototype._reverse) {
//     throw new Error("❌ _reverse method is undefined");
//   } else {
//     const arr1 = [...numbers11];
//     arr1._reverse();
//     assert(arr1, [5, 4, 3, 2, 1]);

//     const arr2 = [1];
//     arr2._reverse();
//     assert(arr2, [1]);

//     const arr3 = [];
//     arr3._reverse();
//     assert(arr3, []);

//     const arr4 = [1, 2];
//     arr4._reverse();
//     assert(arr4, [2, 1]);
//   }
// }, "_reverse method");

/// ToString
const fruits2 = ["apple", "banana", "cherry"];

Array.prototype._toString = undefined;

// runTests(() => {
//   if (!Array.prototype._toString) {
//     throw new Error("❌ _toString method is undefined");
//   } else {
//     assert(fruits2._toString(), "apple,banana,cherry");

//     const nums = [1, 2, 3, 4];
//     assert(nums._toString(), "1,2,3,4");

//     const mixed = ["apple", 2, true];
//     assert(mixed._toString(), "apple,2,true");

//     const empty = [];
//     assert(empty._toString(), "");
//   }
// }, "_toString method");

/// Push
const animals2 = ["cat", "dog"];

Array.prototype._push = undefined;

// runTests(() => {
//   if (!Array.prototype._push) {
//     throw new Error("❌ _push method is undefined");
//   } else {
//     const arr1 = [...animals2];
//     arr1._push("elephant");
//     assert(arr1, ["cat", "dog", "elephant"]);

//     const arr2 = [...animals2];
//     arr2._push("bird", "lion");
//     assert(arr2, ["cat", "dog", "bird", "lion"]);

//     const arr3 = [];
//     arr3._push("horse");
//     assert(arr3, ["horse"]);

//     const arr4 = [...animals2];
//     const length = arr4._push("zebra");
//     assert(length, 3);
//   }
// }, "_push method");

/// Pop
const plants = ["rose", "tulip", "daisy"];

Array.prototype._pop = undefined;

// runTests(() => {
//   if (!Array.prototype._pop) {
//     throw new Error("❌ _pop method is undefined");
//   } else {
//     const arr1 = [...plants];
//     const popped1 = arr1._pop();
//     assert(arr1, ["rose", "tulip"]);
//     assert(popped1, "daisy");

//     const arr2 = ["fern"];
//     const popped2 = arr2._pop();
//     assert(arr2, []);
//     assert(popped2, "fern");

//     const arr3 = [];
//     const popped3 = arr3._pop();
//     assert(arr3, []);
//     assert(popped3, undefined);
//   }
// }, "_pop method");
