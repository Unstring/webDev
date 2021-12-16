let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34]
    [10, 51, 70, 80, 90, 100, 30, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51]
    [11, 50, 75, 85, 92, 100, 34, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92]
    [10, 50, 70, 80, 90, 100, 30, 60], // [10, 50, 70, 80, 90, 100, 30, 60, 11, 75, 85, 34, 51, 92]
];

// let res = arr2d.reduce(
//     function (pv, cv) {
//         let res = pv.concat(cv)
//         res = res.filter(v => cv.includes(v));
//         return res;
//     }
// )

// let res = arr2d.reduce((pv,cv) => pv.concat(cv.filter(v => !pv.includes(v))));
// console.log(res);

console.log(arr2d.reduce((pv,cv) => pv.concat(cv.filter(v => !pv.includes(v)))));