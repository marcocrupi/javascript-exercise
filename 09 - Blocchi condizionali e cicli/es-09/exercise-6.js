function getKeys(obj) {
  const keys = Object.keys(obj).map((key) => key);
  return keys
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);