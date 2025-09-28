const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const allNumbers = [...numbers, ...moreNumbers];

const user = {name: "Tsolaye", age: 20};
const clonedUser ={...user, role: "admin"};

console.log("All Numbers: ", allNumbers);
console.log("Cloned User: ", clonedUser);