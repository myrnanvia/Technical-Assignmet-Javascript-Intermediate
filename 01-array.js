// Soal 01
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(input) {
    let ret = new Array;
    for (let i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// Soal 02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    const avg = total / arr.length;
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            newArr.push(arr[i])
        }
    }

    return newArr.length

}

console.log(getAverage(arr1))
console.log(getAverage(arr2))

// Soal 03
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(arr, num) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr = newArr.concat(arr[i]);
    }

    if (newArr.indexOf(num) == -1) {
        return null
    }
    return newArr.indexOf(num)

}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));