
let cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur", "Mumbai"];

let userInput = prompt("Enter name of city:");


let index = -1;

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === userInput) {
        index = i;
        break;
    }
}

if (index !== -1) {
    console.log("Index of city", userInput, "in the array is ", index);
} else {
    console.log("city not found");
}
