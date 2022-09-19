const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(person, person.firstName = undefined, person.lastName = undefined);

console.log(json); // Should return: { id: 1, age: 25 }