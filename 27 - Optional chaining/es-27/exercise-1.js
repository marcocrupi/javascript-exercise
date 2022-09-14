const person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(person?.address?.city);
console.log(person?.fullName?.()); 