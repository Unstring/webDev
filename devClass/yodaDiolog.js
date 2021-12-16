let str = "My name is Amit Anand. I am a softwere developer. I beleave in learning by doing. I need courage and patience.";


// sarr = str.split(".").map((v) => v.split(" ").reverse().join(" ")).join(". ");
// console.log(sarr);

// let res1 = str.split(".");
// let res2 = res1.filter( v => v.length > 0);
// let res3 = res2.map(s => s.trim());
// let res4 = res3.map(s => s.split(" "));
// let res5 = res4.map(s => s.reverse());
// let res6 = res5.map(a => a.join(" "));
// let res7 = res6.map(s => s + ".");
// let res8 = res7.reduce((pv, cv) => pv + " " + cv);
// console.log(res8);

res = str.split(".").filter( v => v.length > 0).map(s => s.trim().split(" ").reverse().join(" ") + ".").reduce((pv, cv) => pv + " " + cv);
console.log(res);