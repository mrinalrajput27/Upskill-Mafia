// Question 1
console.log("Question 1");
const numnbers = [1,2,3,4,5]
const sqaured = numnbers.map(num => num*num)
console.log(sqaured);


// Question 2
console.log("Question 2");
function getGrade(score){
    return (score>=90) ? 'A' :
    (score>=80) ? 'B':
    (score>=70) ? 'C':
    (score>=60) ? 'D' : 'F'
}
console.log(getGrade(95));
console.log(getGrade(83));
console.log(getGrade(76));
console.log(getGrade(65));
console.log(getGrade(59));

// Question 3
console.log("Question 3");

const car = {
    companyName: 'Toyota',
    model: 'Camry',
    year: 2020
  };
  function changeCarYear(carObject, newYear) {
    carObject.year = newYear;
  }
  changeCarYear(car, 2022);
  const { model, year } = car;
  console.log(`Model: ${model}, Year: ${year}`);
  console.log(car);
  

// Question 4

console.log("Question 4");

function isPrime(num) {
  return num <= 1 ? false : 
         num === 2 ? true : 
         num % 2 === 0 ? false : 
         (() => { 
           for (let i = 3; i <= Math.sqrt(num); i += 2) {
             if (num % i === 0) return false; 
           }
           return true; 
         })();
         
}
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers); 

// Question 5
console.log("Question 5");
console.log("Solution is in the Console Code");
//  `map` Function
// The `map` function creates a new array populated with the results of calling a provided function on every element in the calling array.

//  Use Cases:
// 1. Transformation of Data:
//    - Transforming each element in an array.
//    - Example: Converting an array of strings to uppercase.
//      ```javascript
//      const strings = ['a', 'b', 'c'];
//      const upperStrings = strings.map(str => str.toUpperCase());
//      // Result: ['A', 'B', 'C']
//      ```

// 2. Extracting Specific Properties:
//    - Extracting a property from each object in an array of objects.
//    - Example: Extracting the names from an array of user objects.
//      ```javascript
//      const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
//      const names = users.map(user => user.name);
//      // Result: ['Alice', 'Bob', 'Charlie']
//      ```

// 3. Generating New Data Structures:
//    - Creating new arrays based on calculations or object transformations.
//    - Example: Doubling each number in an array.
//      ```javascript
//      const numbers = [1, 2, 3, 4];
//      const doubled = numbers.map(num => num  2);
//      // Result: [2, 4, 6, 8]
//      ```

//  `filter` Function
// The `filter` function creates a new array with all elements that pass the test implemented by the provided function.

//  Use Cases:
// 1. Filtering Data Based on Conditions:
//    - Filtering elements that meet specific criteria.
//    - Example: Filtering out odd numbers from an array.
//      ```javascript
//      const numbers = [1, 2, 3, 4, 5];
//      const evenNumbers = numbers.filter(num => num % 2 === 0);
//      // Result: [2, 4]
//      ```

// 2. Searching and Extracting Subsets:
//    - Extracting elements that match a certain condition from an array of objects.
//    - Example: Filtering active users from a list of user objects.
//      ```javascript
//      const users = [
//        { name: 'Alice', active: true },
//        { name: 'Bob', active: false },
//        { name: 'Charlie', active: true }
//      ];
//      const activeUsers = users.filter(user => user.active);
//      // Result: [{ name: 'Alice', active: true }, { name: 'Charlie', active: true }]
//      ```

// 3. Removing Unwanted Data:
//    - Cleaning up arrays by removing unwanted elements.
//    - Example: Removing null or undefined values from an array.
//      ```javascript
//      const mixedArray = [1, null, 2, undefined, 3, '', 4];
//      const cleanArray = mixedArray.filter(item => item != null);
//      // Result: [1, 2, 3, '', 4]
//      ```

//  `reduce` Function
// The `reduce` function executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

//  Use Cases:
// 1. Summarizing Data:
//    - Calculating a single value from an array, such as a sum or product.
//    - Example: Summing all numbers in an array.
//      ```javascript
//      const numbers = [1, 2, 3, 4, 5];
//      const sum = numbers.reduce((total, num) => total + num, 0);
//      // Result: 15
//      ```

// 2. Flattening Arrays:
//    - Reducing an array of arrays into a single array.
//    - Example: Flattening a nested array.
//      ```javascript
//      const nestedArray = [[1, 2], [3, 4], [5, 6]];
//      const flatArray = nestedArray.reduce((acc, val) => acc.concat(val), []);
//      // Result: [1, 2, 3, 4, 5, 6]
//      ```

// 3. Building More Complex Data Structures:
//    - Creating objects, sets, or maps from an array.
//    - Example: Grouping objects by a property.
//      ```javascript
//      const people = [
//        { name: 'Alice', age: 21 },
//        { name: 'Bob', age: 25 },
//        { name: 'Charlie', age: 21 }
//      ];
//      const groupedByAge = people.reduce((acc, person) => {
//        (acc[person.age] = acc[person.age] || []).push(person);
//        return acc;
//      }, {});
//      // Result: { '21': [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }], '25': [{ name: 'Bob', age: 25 }] }
//      ```

// These examples illustrate the flexibility and power of `map`, `filter`, and `reduce` in processing and transforming arrays in JavaScript.


// Question 6
console.log("Question 6");
async function fetchData() {
  console.log('Starting fetch operation...');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log('Data fetched successfully:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  console.log('Fetch operation completed.');
}

fetchData();




// Question 7
console.log("Question 7");
// Person with contact details
const person = {
  name: 'John Doe',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  },
  contact: {
    email: 'john.doe@example.com',
    phone: '555-1234'
  }
};

// Person without contact details
const anotherPerson = {
  name: 'Jane Smith',
  address: {
    street: '456 Elm St',
    city: 'Othertown',
    state: 'NY',
    zip: '67890'
  }
};

// Accessing phone numbers with optional chaining
const phoneNumber = person.contact?.phone;
console.log("1 person " + phoneNumber); // Output: '555-1234'

const anotherPhoneNumber = anotherPerson.contact?.phone;
console.log("2 person " + anotherPhoneNumber); // Output: undefined
