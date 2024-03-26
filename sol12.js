function findIntersection(arr1, arr2) {

    let intersection = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                let isDuplicate = false;
                for (let k = 0; k < intersection.length; k++) {
                    if (intersection[k] === arr1[i]) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    intersection.push(arr1[i]);
                }
                break;
            }
        }
    }
    return intersection;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let intersectionArray = findIntersection(arr1, arr2);

console.log("Intersection of arrays:", intersectionArray);
