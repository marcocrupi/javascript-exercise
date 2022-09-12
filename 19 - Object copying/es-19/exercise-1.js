const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// Modificando l'oggetto `person2`, viene modificato anche l'oggetto `person1`
// perché i due oggetti fanno riferimento alla stessa allocazione di memoria,
// questa si chiama assegnazione per valore.