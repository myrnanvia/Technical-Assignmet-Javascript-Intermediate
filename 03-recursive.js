// Soal 01
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
    if (arr.length > 1) {
        return arr.pop() + sumOfArray(arr);
    } else {
        return arr[0];
    }
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Soal 02
const avg1 = sumOfArray(arr1);
const avg2 = sumOfArray(arr2);

function countAboveAvg(arr, avg) {

    const aveg = avg / arr.length;
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > aveg) {
            newArr.push(arr[i])
        }
    }

    return newArr.length

}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// Soal 03
const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, num) {
    if (arr.indexOf(num) == -1) {
        return "angka tidak ditemukan"
    }
    return console.log("angka ditemukan pada index: " + arr.indexOf(num))

}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

// Soal 04
function trianglePattern(num) {
    let n = num;
    let string = "";
    let count = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            string += " ";
        }

        for (let k = 0; k < i; k++) {
            string += String.fromCharCode(count + 65);
            count++;
        }
        string += "\n";
    }
    console.log(string);
}

console.log(trianglePattern(5));