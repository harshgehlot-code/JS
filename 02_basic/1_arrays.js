
const myarr = [0, 1, 2, 3, 4, 5];

// console.log(myarr[3]);

// myarr[3] = 10; // Change the value at index 3
// console.log(myarr[3]);
// // myarr[1] = 10
// myarr.push(6); // Add a new element at the end
// myarr.pop() // remove element and print on console
// myarr.unshift(4); // Add a new element at the beginning
// myarr.shift(); // Remove the first element
// myarr.splice(2, 1); // Remove the element at index 2
// console.log(myarr.includes(3)); // Access the element at index 2

const newarr = myarr.join(); // Join the elements into a string
// console.log(typeof myarr); //object type
// console.log(typeof newarr); // string type

// console.log("A ", myarr);
const myn1 = myarr.slice(1, 3); // Create a new array from index 1 to 3 (exclusive)

// console.log(myn1);
// console.log("B ", myarr);

// console.log("++++++++++++++++++++++++++++++++++++");

const myn2 = myarr.splice(1, 3); // Create a new array from index 1 to 3 (exclusive)
// console.log("c ", myarr);
// console.log(myarr); 

// console.log("B ", newarr3);


const marvel_heros = ["thor", "ironman", "hulk", "spiderman", "captain america"];
const dc_heros = ["batman", "superman", "flash", "aquaman"]

marvel_heros.push(...dc_heros); // Merge two arrays // spread 

// console.log(marvel_heros);

const Array = [1,2,3,4,5]

// console.log(Array.isArray("34555"));

