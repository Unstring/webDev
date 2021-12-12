// let arr = [5,10,15,20,25,30];

// let sqarr = arr.map(function (v, i, oarr) {
//     console.log(v + "@" + i + " is " + oarr);
//     return v*v;
// })
// console.log(sqarr);


// let arr = [
//     "jgds sslkjd",
//     "lkjdsf sdsa",
//     "shgdak sakjdh",
//     "sajdl skdja",
//     "asidjl kjds"
// ];

// let sqarr = arr.map(function (v, i, oarr) {
//     // console.log(v + "@" + i + " is " + oarr);
//     let sar = v.split(" ");
//     let nstr = sar[0].charAt(0) +"."+ sar[1].charAt(0) +".";
//     return nstr;
// })
// console.log(sqarr);


let arr = [
    {
        gender: 'M',
        age: 24
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'F',
        age: 28
    },
    {
        gender: 'M',
        age: 74
    },
    {
        gender: 'F',
        age: 31
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 26
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 47
    },
    {
        gender: 'F',
        age: 19
    },
    {
        gender: 'M',
        age: 20
    }
]

let finder = arr.map(function (v, i, oarr) {
    let response = false;
    if(v.age >= 20 && v.age <=30 && v.gender == "F"){
        response = true
    }
    return response;
})

console.log(finder);

let sl3 = arr.map((v, i) => { 
    return v.gender == 'F' && v.age >= 20 && v.age <= 30 ;
});
console.log(sl3);

let sl2 = arr.map((v) => v.gender == 'F' && v.age >= 20 && v.age <= 30);
console.log(sl2);