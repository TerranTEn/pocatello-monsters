// Creating & editing arrays

const friends = ["Garrett", "John", "Annie", "Andrew"];

// console.log(friends[0]); // Prints Garrett
// console.log(friends[2]); // Prints Annie
// console.log(friends[-1]); // Prints undefined

friends.push("Elie"); // Adds new element to the end of the array

//console.log(friends);

const exfriend = friends.pop(); // Remove last element of the array

//console.log(exfriend);

//console.log(friends.sort()); // Sorts the array

// Number arrays

const numbers = [5, 89, 234, 76, 34567, 2, 3];
//console.log(numbers.length); // Prints 7

const numbersTimesTwo = [];
for (i = 0; i < numbers.length; i++) {
  numbersTimesTwo.push(numbers[i] * 2);
}
// console.log(numbersTimesTwo);

const numbersDivisibleByTwo = [];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    numbersDivisibleByTwo.push(numbers[i]);
  }
}
//console.log(numbersDivisibleByTwo);

function map(array, fn) {
  const transformedArray = [];

  for (i = 0; i < array.length; i++) {
    transformedArray.push(fn(array[i]));
  }

  return transformedArray;
}

function filter(array, fn) {
  const filteredArray = [];

  for (i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
}

const numbersTimesFour = map(numbers, (x) => x * 4);
// console.log(numbersTimesFour);

const numbersDivisibleByThree = filter(numbers, (x) => x % 3 == 0);
console.log(numbers.filter(isDivisbleByThree));

function isDivisbleByThree(x) {
  return x % 3 == 0;
}

// console.log(numbers.map((x) => x * 8));

const beers = [
  { name: "Bigfoot", abv: 9.5, type: "barly style ale" },
  { name: "Dead Guy Ale", abv: 6.9, type: "Maibock" },
  { name: "Sierra Nevada Pale Ale", abv: 5.0, type: "Pale Ale" },
  { name: "Pabst Blue Ribbon", abv: 5.0, type: "Pilsner" },
];

const powerfulBeers = beers.filter((b) => b.abv > 5);
console.log(powerfulBeers);

const beerNames = beers.map((b) => b.name);
console.log(beerNames);

const beerWithFivePercentAbv = beers.find((b) => b.abv == 5.0);
console.log(beerWithFivePercentAbv);

console.log(
  "Are there any bitchy beers? Answer: ",
  beers.some((b) => b.abv < 5.0)
);
