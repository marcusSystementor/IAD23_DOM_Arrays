// Några av arrayfunktionerna som är vanligt användbara.
// Det finns väldigt många arrayer i JavaScript. En bra resurs är här:
// https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769

// Map

const firstArray = [1, 2, 3, 4];

const secondArray = firstArray.map((x) => x - 2);
console.log(secondArray);

// Concat

const thirdArray = [1, 2, 3, 4];
const fourthArray = [4, 5, 6];
const concatArray = firstArray.concat(secondArray);

console.log(concatArray);

// Filter

const numbers = [1, 5, 6, 7, 19, 22, 23, 43, 12, 56];

const result = numbers.filter((number) => number >= 10);
console.log(result);
