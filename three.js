import v from "validator";

let email="test@gmail.com"

console.log(v.isEmail(email)) 
email="test@"
console.log(v.isEmail(email));

console.log(v.isLowercase("LJeng"));
console.log(v.isEmpty(""));
console.log(v.isJSON('{"name":"swapnil"}'));
