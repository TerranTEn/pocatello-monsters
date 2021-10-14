// Function syntax

// Function definition syntax 1
function stringCombiner(str1, str2) {
  return str1 + str2;
}

function printCombinedString(str1, str2) {
  console.log(str1 + str2);
}

const resultOfFunctionWithNoReturnStatement = printCombinedString("Hi", "Bye");
console.log(resultOfFunctionWithNoReturnStatement); // Prints undefined

const functionResult = stringCombiner("Hi ", "John");
// functionResult = Hi John
console.log(functionResult);

// Calling the function1 & logging the output
console.log(stringCombiner("Hi ", "Garrett"));

// Function definition syntax 2
const combiner2 = function (str1, str2) {
  return str1 + str2;
};

// Calling the function2 & logging the output
console.log(combiner2("Hi ", "Terran"));

// Function definition syntax 3
const combiner3 = (str1, str2) => str1 + str2; // Return statement is implicit with this syntax
