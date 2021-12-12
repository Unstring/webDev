let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
let rarr = [];
console.log(arr.length);
console.log(rarr.length);
let l = arr.length;
for (let i = 0; i < l; i++) {
    let dlast = arr.pop()
    if(dlast%2 == 0){
        rarr.unshift(dlast);
    }else{
        rarr.push(dlast);
    }
}
console.log(arr.length);
console.log(rarr.length);
console.log(arr);
console.log(rarr);