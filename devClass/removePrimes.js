// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let arr = [15,47,15,17,92,97,93];
let ln = arr.length
for (let i = ln; i > 0; i--) {
    // console.log(arr[i]);
    if(!isPrime(arr[i])){
        // console.log(arr[i]);
        arr.splice(i,1);
    }
}
// console.log(ln);
console.log(arr);
// console.log(arr);
// console.log(arr.length);
// console.log(isPrime(9));

function isPrime(n) {
    for(let i = 2; i*i <= n; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}