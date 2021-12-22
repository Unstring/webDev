function enterFirstName(firstName){
    return function enterLastName(SecondName) {
        return function enterAge(age) {
            return function enterDetail(details) {
                console.log("Your name is: " + firstName + SecondName + " And your age is: " + age);
            }
        }
    }
}

console.log("Kindly enter your first name");
let entername = enterFirstName("Amit");
console.log("Enter last name.");
let 