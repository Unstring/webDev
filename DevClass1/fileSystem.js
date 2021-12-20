Array.prototype.myFlat = function(depth){
    let oarr = this;
    let res = [];

    customflat(oarr, depth, res);

    return res;
}

function customflat(node, td, res) {
    if (Array.isArray(node)) {
        if (td > 0) {
            for (let i = 0; i < node.length; i++) {
                customflat(node[i], td - 1, res);
            }
        } else {
            for (let i = 0; i < node.length; i++) {
                res.push(node[i]);
            }
        }
    } else {
        res.push(node);
    }
}

let arr = [10, 20, [50, 60, [90, 100]], 30, [70, [110, 120], 80], 40];

let res1 = arr.myFlat(1);
console.log(res1);

res2 = arr.flat(1);
console.log(res2);