function fn(params1, params2) {
    console.log("Inside function" , params1, params2);
}

fn("Hello", "Hi");

function fn(params1, params2) {
    console.log(arguments);
    console.log(params1, params2);
}