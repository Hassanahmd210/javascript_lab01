let number = 1;
let sum = 0;

while (number <= 100) {
    if (number % 2 === 0) {
        sum += number;
    }
    number++;
}

console.log("Sum of even numbers from 1 to 100 :", sum);
