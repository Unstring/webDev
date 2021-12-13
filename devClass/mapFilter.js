// let arr = [11, 16, 18, 17, 23, 42, 11, 37];

// let mres = arr.map(v => v % 2 == 1);
// let fres = arr.filter(v => v % 2 == 1);

// console.log(mres);
// console.log(fres);

// let products = [
//     {name : "T-Shirt", price: 25},
//     {name : "Headphones", price: 125},
//     {name : "Keyboard", price: 75},
//     {name : "Monitor", price: 200}
// ]

// let res = products.map(function (v) {
//     if (v >= 100) {
//         return v.name.toUpperCase();
//     }else{
//         return v.name.toLocaleLowerCase();
//     }
// });
// console.log(res);

let arr = [5, 83, 24, 67, 71, 12,24,7];

let qubes = arr.map(v => v*v*v).filter(v => v < 10000);
console.log(qubes);