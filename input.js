// ================== ES6 (2015) Features ==================

// 1️⃣ let & const (Block-scoped variables)
let mutable = "I can change";
const immutable = "I cannot change";

// 2️⃣ Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// 3️⃣ Template Literals
const name = "Alice";
console.log(`Hello, ${name}!`); // "Hello, Alice!"

// 4️⃣ Destructuring Assignment
const person = { name: "John", age: 30 };
const { name: firstName, age } = person;
console.log(firstName, age); // "John", 30

// 5️⃣ Default Parameters
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // "Hello, Guest!"

// 6️⃣ Spread & Rest Operators
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread
console.log(arr2); // [1, 2, 3, 4, 5]

const sum = (...numbers) => numbers.reduce((acc, val) => acc + val, 0); // Rest
console.log(sum(1, 2, 3)); // 6

// 7️⃣ Promises (Async Handling)
const fetchData = () =>
    new Promise((resolve) => setTimeout(() => resolve("Data fetched"), 1000));

fetchData().then(console.log); // "Data fetched" (after 1 sec)

// 8️⃣ Classes (OOP)
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
const p = new Person("Bob");
p.greet(); // "Hello, I'm Bob"

// 9️⃣ Modules (import/export) - Skipped as it's in separate files

// ================== ES7 (2016) Features ==================

// 🔹 Array.prototype.includes()
console.log([1, 2, 3].includes(2)); // true

// 🔹 Exponentiation Operator (**)
console.log(2 ** 3); // 8

// ================== ES8 (2017) Features ==================

// 🔹 Async/Await
const fetchDataAsync = async () => "Hello";
fetchDataAsync().then(console.log); // "Hello"

// 🔹 Object.entries() & Object.values()
const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]
console.log(Object.values(obj)); // [1, 2]

// ================== ES9 (2018) Features ==================

// 🔹 Rest/Spread on Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// 🔹 Promise.finally()
fetchData()
    .then(console.log)
    .finally(() => console.log("Cleanup done"));

// ================== ES10 (2019) Features ==================

// 🔹 Array.prototype.flat()
const nestedArr = [1, [2, [3, 4]]];
console.log(nestedArr.flat(2)); // [1, 2, 3, 4]

// 🔹 Optional Catch Binding
try {
    throw new Error("Oops!");
} catch {
    console.log("Error handled!");
}

// ================== ES11 (2020) Features ==================

// 🔹 Optional Chaining (?.)
const user = {};
console.log(user?.profile?.name); // undefined (No Error)

// 🔹 Nullish Coalescing (??)
console.log(null ?? "Default"); // "Default"
console.log(0 ?? "Default"); // 0

// ================== ES12 (2021) Features ==================

// 🔹 Numeric Separators (_ for readability)
const budget = 1_000_000; // 1000000
console.log(budget);

// 🔹 String.replaceAll()
console.log("hello hello".replaceAll("hello", "hi")); // "hi hi"

// ================== ES13+ (2022 - Now) Features ==================

// 🔹 Array.prototype.at()
const arr = [10, 20, 30];
console.log(arr.at(-1)); // 30

// 🔹 Top-level await (Only works in modules)
// const data = await fetchData(); // Uncomment in ES Modules
// console.log(data);
