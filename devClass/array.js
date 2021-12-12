let arr = [20,30,40,50];

display(arr);

let psh = arr.push(60,70,80);
display(arr);
console.log(psh);

let rv = arr.pop();
display(arr);
console.log(rv);

arr[10] = 5;
display(arr);

arr["kuchhbhi"] = 10;
display(arr);
console.log(arr["kuchhbhi"]);

console.log(Object.keys(arr));

arr.unshift(1000);
display(arr);

let shft = arr.unshift(1000,2000,3000);
display(arr);
console.log(shft);

function display(arr) {
    console.log(arr + " = " + arr.length);
}