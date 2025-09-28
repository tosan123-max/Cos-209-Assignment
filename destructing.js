const user = { id: 1, username: "Daniel", email: "dachima@gmail.com"};
const{ id, username} = user;

const numbers = [35, 44, 56];
const [first, second] = numbers;

console.log("User ID: ", id);
console.log("Username: ", username);
console.log("First : ", first, "Second: ", second);
console.log(user)