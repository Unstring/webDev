Array.prototype.myEvery = function(callback){
    let oarr = this;

    for(let i = 0; i < oarr.length; i++){
        let v = oarr[i];
        let rbv = callback(v, i, oarr);

        if(rbv != true){
            return false;
        }
    }
    return true;
}

let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 34, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"}
];

let isAllFimaleCondidatesValid = arr.flter(c => c.gender == "F").every(v => v.age >= 20 && v.age <= 30);
console.log(isAllFimaleCondidatesValid);