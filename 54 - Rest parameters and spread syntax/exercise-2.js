const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};

const newObj = {...person, ...personInfo};

console.log(newObj);