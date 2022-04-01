// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// a test/it method, nested within the describe block, that in plain words, describes that the function does.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
describe("fibSequence",() => {


    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
// Example input:  6
// Expected output: [1, 1, 2, 3, 5, 8]
// Example input: = 10
// Expected output: [1, 1, 2, 3, 5, 8]

      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(fibSequence(6)).toEqual([1,1,2,3,5,8])
      expect(fibSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

// Running this test has failed which is what we are looking for.
// ReferenceError: fibonacciSequence is not defined


// b) Create the function that makes the test pass.

// Psuedocode:
// Create a function that declares fibSequence as a variable in an array
// Use the array to store the Fibonacci to eliminate the need to use auxiliar variables in the code
// Input 10 following .notation in order to render the first 10 numbers of the Fibonacci output array

const fibSequence = (arraylength) => {
  let newArray = [1,1]
  for(let i=0; i < arrayLength-2; i++){
    let sum = newArray[i] + newArray[i+1]
      newArray.push(sum)
  }
  return newArray
}
// All Green, test passed.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("oddNumbersInOrder", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

    expect(oddNumbersInOrder(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddNumbersInOrder(fullArr2)).toEqual([-823, 7, 23])
  })
})

// Received fail for oddNumbersInOrder is not defined
// ReferenceError: oddNumbersInOrder is not defined

// b) Create the function that makes the test pass.

// create a function that takes in an array as a parameter
// filter every value that isn't a number and every number that is not odd
// store filtered values on new variable
// sort the final results

const oddNumbersInOrder = (array) => {
    let oddNums  = array.filter(value => {
        return typeof value === "number" && value % 2 !==0
    })
    let oddArray = oddNums.map(value => value)
    return oddArray.sort((a,b) => a-b)
}

// All Green, test passed

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumArr", ()=>{
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", ()=>{
    const numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]

    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]

    const numbersToAdd3 = []
// Expected output: []
  expect(sumArr(numbersToAdd1)).toEqual([2, 6, 51, 60])
  expect(sumArr(numbersToAdd2)).toEqual([0, 7, -1, 11])
  expect(sumArr(numbersToAdd3)).toEqual([])
  })
})


// b) Create the function that makes the test pass.
// Declare a function of sumArr
// sumArr takes in an array
// Use the .map method to iterate through


const sumArr= (array) => {
  let newArray = []
  if(array.length < 1){
    return newArray
  } else{
    newArray.push(array[0])
    for(let i = 0; i<array.length-1; i++){
      newArray.push(newArray[i] + array[i+1])
    }
    return newArray
  }
}
