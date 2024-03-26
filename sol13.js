function filterUniqueNumbers(array) {

    return array.reduce((uniqueNumbers, currentNumber) => {

        if (!uniqueNumbers.includes(currentNumber)) {
            uniqueNumbers.push(currentNumber);
        }

        return uniqueNumbers;
    }, []);
}

let numbers = [1, 2, 3, 4, 5, 3, 4, 6, 7, 8, 9, 1, 2];

let uniqueNumbers = filterUniqueNumbers(numbers);

console.log("Unique numbers:", uniqueNumbers);
