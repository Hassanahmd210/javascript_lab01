function findLongestString(array) {
    
    let longestString = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestString.length) {
            longestString = array[i];
        }
    }
    return longestString;
}

let string = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Jaipur", "Lucknow"];

let longeststring = findLongestString(string);

console.log("Longest string :", longeststring);
