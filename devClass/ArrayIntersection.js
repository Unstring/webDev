let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60],
    [10, 51, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 92, 100, 34, 60],
    [10, 50, 70, 80, 90, 100, 30, 60]
]

let res = arr2d[0];

for (let i = 1; i < arr2d.length; i++) {
    res = res.filter(v => arr2d[i].includes(v));
    
}
console.log(res);


let res2 = arr2d.reduce(
    function (pv, cv) {
        let res = pv.filter(v => cv.includes(v));
        return res;
    }
)

console.log(res2);