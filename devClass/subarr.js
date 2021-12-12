let arr = [10,20,30,40];
for (let i = 0; i < arr.length; i++) {
    let sarr = arr.slice(-(arr.length - i));
    for (let j = 0; j < arr.length - i; j++) {
        console.log(sarr.slice(0, j + 1));
    }
}