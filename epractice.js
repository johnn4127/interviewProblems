// //print from 1-10

// for (i = 1;i <= 10; i++){
//     console.log(i)
// }

// for(i=1;i <= 10;i++){
//     console.log(i)
// }

// for(i = 1; i <= 10; i++){
//     console.log(i)
// }

//Print the odd numbers less than 100

// for(let i = 0; i < 100; i++){
//     if(i % 2=== 1)
//     console.log(i)
// }


// for(i=0;i <= 100; i++){
// if(i % 2 === 1)
// console.log(i)
// }

// for(i= 1;i <= 100; i+=2){
//     console.log(i)
// }


//or 

//Could you create a function that accepts two inputs: an array and a target value? Within the function, your task is to determine whether the target value exists within the array.

//Exercise 3: Calculate the sum of numbers from 1 to 10

// sum = 0

// for(i = 1; i <= 10; i++){
//     sum = sum + i
// }
// console.log(sum)




// sum=0

// for(i =0; i <= 10; i++){
//     sum+=i
// }
// console.log()


//Could you create a function that accepts two inputs: an array and a target value? Within the function, your task is to determine whether the target value exists within the array.


// function doesValueExist(array, target) {
//     return array.includes(target);
// }

// const guests = ['Dez', 'Doug', 'Tri', 'Teddy', 'Mister Meseeks'];
// const guestToFind = 'Dez';

// const exists = doesValueExist(guests, guestToFind);

// if (exists) {
//     console.log(`${guestToFind} exists in the array.`);
// } else {
//     console.log(`${guestToFind} does not exist in the array.`);
// }



// for (i = 0; i <= 100; i++){
//     if( i % 3 );
// }
//* Exercise 4: Calculate the sum of odd numbers greater than 10 and less than 30. *
// sum = 0
// for(let i = 10; i <= 30; i++){
//     if(i % 2 === 1){
//     sum = sum + i 
//     }

// }
// console.log(sum)



//* Exercise 5: Calculate the sum of numbers in an array of numbers. *
// sum = 0
// tonyArray= [ 10, 20, 30, 40]

// for(i = 0; i < tonyArray.length; i++){
//     sum = sum + tonyArray[i]
// }
// console.log(sum)

// * Exercise 6: Calculate the average of the numbers in an array of numbers. *
// tonyArray= [ 10, 20, 30, 40]
// sum = 0
// for(i = 0; i < tonyArray.length; i++){
//     sum = sum +tonyArray[i];   
// }
// avg = sum / tonyArray.length

// console.log(avg)


//Write a function that takes in two arrays, and returns 1. Which arrays sum is greater. 2. The difference between the sum of the greatest array and the other array.
//Example arrays:
//let arr1 = [0,1,2]
//let arr2 = [3,4,5]
//Expected output:
//\\]
//The greatest array is arr2, which has a sum of 12. The greatest array - the smaller array = 9.

//palindrome example Racecar

// const palindromeCheck = (string)=>{
//     let stringLower = string.toLowerCase()
//     let splitString = stringLower.split('')
//     let noSpaceString = ''  
//     let regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g

//     for(let i=0; i<splitString.length; i++){
//         if(splitString[i] !== ' '){
//             noSpaceString += splitString[i]
//         }
//     }   
//     let compareString = ''
//     for(let i=noSpaceString.length-1; i >= 0; i--){
//         compareString += noSpaceString[i]
//     }
//     let desiredpalindrome = compareString.replace(autoregex)
//     console.log(desiredpalindrome)  
//     if(compareString == noSpaceString){
//         return `This word is a palindrome!`
//     }else{
//         return `This word is NOT a palindrome`
//     }

// }



// console.log(palindromeCheck('Was it a car or a cat I saw!'))

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let newArr = [...arr1,...arr2]

// console.log('array 1 normal', arr1)
// console.log('array 1 spread',...arr1)
// console.log(newArr)

// const array = [50,2,10,-1,100,25,30,21]

//Bubble sort Long version
// function BubbleLong(array){
// for (let i = 0; i < array.length -1; i++){
//     for(let j= 0 ; j < array.length - 1 - i; j++){
//         if(array[j] > array [j+1]){
//             let storage = array [j]
//             array[j] = array[j+1]
//             array[j+1] = storage
//         }
//     }
// } return array
// }
// console.log(BubbleLong(array))

//Bubble sort short way
// function BubbleLong(array){
//     for (let i = 0; i < array.length -1; i++){
//         for(let j= 0 ; j < array.length - 1 - i; j++){
//             if(array[j] > array [j+1]){
//                 [array[j], array[j+1]] =[array[j+1], array[j]]
//             }
//         }
//     } return array
//     }
//     console.log(BubbleLong(array))

//sum of array
// const array = [1,2,3]

// function newSum(array){
//     let sum = 0
//     for(let i= 0; i < array.length; i++){
//         sum = sum + array[i]
//         array[i] = sum //do not need this line
//     }
//     return sum
// }
// console.log(newSum(array))

//print out the largest and smallest number

// const array = [1,-10,20,5,100,2]

// const findBigAndSmallNum = (nums)=>{
//     let smallNum = nums[0]
//     let bigNum = nums [0]
//     let newArray = []
//     for( let i = 0; i < array.length;i++){
//         if(nums[i] < smallNum){ //smallnum is at 1, is 1 greater than 1 no. is -10 smaller than 1 yes
//             smallNum = nums[i] //the smallest number is now smallNum
//         }
//         if( nums[i] > bigNum){
//             bigNum = nums[i]
//         }
//     } return `smallest: ${smallNum}, biggest:${bigNum}`

// }
// console.log(findBigAndSmallNum(array))

//write a palindrome function
//find repeating numbers. MY WAY

// const array = [1,2,1,3,4,5,4]

// const repeatNum = (repeat) =>{

//     let repeater = []

//     for(let i = 0; i < repeat.length ; i++){ //for loop
//         for(let j = i; j <repeat.length; j++) 
//         if(repeat[i] === repeat[j+1]){
//             repeater.push(repeat[i])
//         }

//     }return repeater

// }

// console.log(repeatNum(array))

//find repeating numbers. JD's way
// const array = [1,2,1,3,4,5,2,3,6,4]

// const repeatNum = (repeat) =>{

//     let repeater = []

//     for(let i = 0; i < repeat.length ; i++){ //for loop
//         for(let j = i +1 ; j <repeat.length; j++) 
//         if(repeat[i] === repeat[j]){
//             repeater.push(repeat[i])
//         }

//     }return repeater

// }

// console.log(repeatNum(array))


// Question 1:
const testArray = [12, 29, 32, 22, 44, 57, 5, 12, 29];
// Write a JavaScript function that takes an array of numbers as input and returns an array containing all the duplicate numbers found in the input array. If no duplicates are found, the function should return an empty array.

const duplicates = (numbers) => {
    let dNums = []
    let noDNumbs = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                dNums.push(numbers[i])
            }
            else {
                noDNumbs
            }
        }
    }
    console.log(dNums)
}

duplicates(testArray)



for( let i= 0; i < Ab.length;i++){

    sum = sum + ab[i]
}