// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
let array2 = [1, 4, 11, 2, 37, -4]
let array3 = [0, 1, 2, 3, 4, 5]
let array4 = [6, 32, -5, 4, -5, -2]

// Write your solution below:

function isSumZero (numbers) {
    let test = false;
    for (let j = 0; j < numbers.length; j++) {
        for (let i = (j + 1); i < numbers.length; i++) {
            if (numbers[j] + (numbers[i]) === 0) {
                console.log("True")
                test = true
                return true
            }
        }
    };
    if (test === false) {
        console.log("False")
    }
}

isSumZero(array)
isSumZero(array2)
isSumZero(array3)
isSumZero(array4)