// add type to var 
function hello(name : string) {
  return "Hello World," + name
}

let username = "James" 

console.log(hello(username))

// Interface
interface Person {
  firstname : string
  lastname  : string
}

function hello_interface (person: Person) {
  return "Hello," + person.firstname + " "+ person.lastname 
}

let user = {
  firstname : "James",
  lastname  : "Brooke"
}

console.log("\n" + hello_interface(user))


