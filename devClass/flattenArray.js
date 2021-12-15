var oldArray = [[2, 8, 10], [34], [45,31,25,64,72,88],[],[25,73]];
var newArray = Array.prototype.concat.apply([], oldArray);
console.log(newArray);