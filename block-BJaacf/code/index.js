// 1. Create an array named numbers and store 5 number values in it
let numbers = [45, 8, 69, 3, 5];


// 2. Calculate the sum of array items and print it to the console using console.log()
let sumNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
    sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers); // sum of number values of numbers array


// 3. Calculate the average of array items and print it to the console using console.log()
let average = sumNumbers / numbers.length;
console.log(average);

// 4. Find the highest number in the array and print it to the console using console.log()
let highest = 0;
for (let i = 0; i < numbers.length; i++) {
    if (highest < numbers[i]) {
        highest = numbers[i];
    }else continue;
}
console.log(`Highest value in the array is ${highest}`);

// 5. Find the lowest number in the array and print it to the console using console.log()
let lowest = numbers.length - 1;
for (let i = 0; i < numbers.length; i++) {
    if (lowest > numbers[i]) {
        lowest = numbers[i];
    }else continue;
}
console.log(`Lowest value in the array is ${lowest}`);

// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [];
for (let number of numbers) {
    if (number % 2 === 0) {
        even.push(number);
    }
}
console.log(even);

// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];
for (let number of numbers) {
    if (number % 2 != 0) {
        odd.push(number);
    }
}
console.log(odd);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for (let number of numbers) {
    if (number % 5 === 0) {
        console.log(number);
    }
}

// 9. Log all the element of the array one by one
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 10. Find all the number in the array that is divisible by 3
let divThree = [];
for (let number of numbers) {
    if (number % 3 === 0) {
        divThree.push(number);
    }
}
console.log(divThree);