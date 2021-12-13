Array.prototype.mySome = function(callback){
    let oarr = this;

    for(let i = 0; i < oarr.length; i++){
        let v = oarr[i];
        let rbv = callback(v, i, oarr);

        if(rbv == true){
            return true;
        }
    }

    return false;
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

let isThereAnyValidCondidate = arr.some(function (v, i, oarr) {
    if(v.gender == "F" && v.age >= 20 && v.age <= 30){
        return true;
    }else{
        return false;
    }
});
console.log(isThereAnyValidCondidate);