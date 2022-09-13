function calculateAverageAge(persons) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < persons.length; i++) {
    total += persons[i].age;
    count++;
  };

  const averageAge = total / count;

  return averageAge;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log("Average age:", averageAge);

// ALTERNATIVE SOLUTION

// function calculateAverageAge(persons) {
//   let total = 0;
//   let count = 0;
//   persons.forEach((element) => {
//     total += element.age;
//     count++;
//   });

//   const averageAge = total / count;

//   return averageAge;
// }

// const persons = [
//   { name: "Paul", age: 16 },
//   { name: "George", age: 17 },
//   { name: "Lucas", age: 21 },
//   { name: "Marco", age: 32 },
//   { name: "Peter", age: 18 },
//   { name: "Carl", age: 13 },
//   { name: "Simon", age: 24 },
//   { name: "Mark", age: 15 },
//   { name: "Sandra", age: 34 },
//   { name: "Alice", age: 28 },
// ];

// const averageAge = calculateAverageAge(persons);
// console.log(persons);
// console.log("Average age:", averageAge);