let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let arr = [20, 54, 12, 33, 98, 76, 100, 11, 291, 34];

// sort and reverse

let Ssarr = sarr.sort();
let Sarr = arr.sort((function(a, b){return a-b}));

let RSsarr = Ssarr.reverse();
let RSarr = Sarr.reverse();

console.log(RSsarr);
console.log(RSarr);