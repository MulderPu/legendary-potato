// add type to var 
function hello(name) {
    return "Hello World," + name;
}
var username = "James";
console.log(hello(username));
function hello_interface(person) {
    return "Hello," + person.firstname + " " + person.lastname;
}
var user = {
    firstname: "James",
    lastname: "Brooke"
};
console.log("\n" + hello_interface(user));
