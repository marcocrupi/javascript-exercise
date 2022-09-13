function getKeys(obj) {
  let objKeys = [];
  for (let key in obj) {
    objKeys.push(key);
  }
  return objKeys;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);

// ALTERNATIVE SOLUTION

// function getKeys(obj) {
//   const keys = Object.keys(obj).map((key) => key);
//   return keys
// }

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 32,
//   city: 'Rome',
//   job: 'Developer',
// };

// const keys = getKeys(person);
// console.log(keys);
