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
let enterLastName = enterFirstName("Amit");
console.log("Enter last name.");
let enterage = enterLastName("Anand");
console.log("EnterAge");
let details = enterAge(25);
console.log("rendom text");
enterDetail();