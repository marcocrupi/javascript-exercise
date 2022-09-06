# JAVASCRIPT EXERCISE

Soluzione agli esercizi in formato .zip contenuti nella cartella "Exercises".

## 01 - Definire la variabile

In questo esercizio si sta cercando di far stampare la frase "Paul plays football", ma se si esegue il codice si noterà l'errore "personName is not defined".

Cosa occorre fare per fixare l'errore?

```js
function canPlay() {
  let personName = "Paul";
  if (true) {
    personName += " plays football";
  }
  console.log(personName);
}

canPlay();
```

## 02 - Variabile readonly

L'obiettivo di questo esercizio è quello di rendere `personName` una variabile di sola lettura. Qual è la keyword da utilizzare per dichiarare una variabile `readonly`? L'esercizio risulta corretto se in console si ottiene Uncaught TypeError: `Assignment to constant variable`.

```js
function canPlay() {
  const personName = 'Paul';

  if (true) {
    personName = 'George'; // Argh! Voglio che personName sia una variabile di sola lettura
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();
```

## 03 - Variables Declarations

In questo esercizio occorre implementare la funzione `addStudent`, la quale si occupa di aggiungere un elemento all'array `students` dichiarato tramite `const`.

Qual è il metodo che possiamo utilizzare per aggiungere un elemento all'array?

Sai individuare il motivo per cui abbiamo la possibilità di aggiungere un elemento all'array nonostante abbiamo dichiarato la variabile come `readonly`?

```js
const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
}

addStudent('Marco');
console.log(students);
```

## 04 - Conditionals & Loops

Implementare, tramite i blocchi condizionali `if / else-if / else`, la funzione `calculateSalary`, la quale, dato in input un ruolo, calcola e restituisce il salario corrispondente.
Per ogni ruolo il salario percepito è il seguente:

- ceo => 2200€
- manager => 1800€
- cto => 1800€
- developer => 1500€
- default => 1000€

```js

// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  if (role === "ceo") {
    return 2200;
  } else if (role === "manager") {
    return 1800;
  } else if (role === "cto") {
    return 1800;
  } else if (role === "developer") {
    return 1500;
  } else {
    return 1000;
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
```

## 05 - Conditionals & Loops

Implementare, tramite il blocco condizionali `switch-case`, la funzione `calculateSalary`, la quale, dato in input un ruolo, calcola e restituisce il salario corrispondente.
Per ogni ruolo il salario percepito è il seguente:

- ceo => 2200€
- manager => 1800€
- cto => 1800€
- developer => 1500€
- default => 1000€

```js
// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (role) {
    case "ceo":
      return 2200;
    case "manager":
      return 1800;
    case "cto":
      return 1800;
    case "developer":
      return 1500;
    default:
      return 1000;
  }
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
```

## 06 - Conditionals & Loops

Implementare, tramite blocchi condizionali e/o cicli, la funzione `adultFilter`, la quale, dato un array di persone, filtra e restituisce soltanto coloro che sono maggiorenni.

```js
function adultFilter(persons) {
  const adultStudent = []
  persons.forEach(element => {
    if (element.age > 18){
      adultStudent.push(element);
    }    
  }); 
  return adultStudent;
}

// ALTERNATIVE SOLUTION:
// function adultFilter(persons) {
// return persons.filter(function (obj) {
//   return obj.age > 18;
// });
// }

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

const adults = adultFilter(persons);
console.log("persons", persons);
console.log("adults", adults);
```

## 07 - Conditionals & Loops

Implementare, tramite blocchi condizionali e/o cicli, la funzione `nicknameMap`, la quale, dato un array di persone, crea un array di nickname. Il nickname deve essere formato nel seguente modo: `<name>-<age>`.

```js
function nicknameMap(persons) {
  const nickName = [];
  persons.forEach(element => {
    nickName.push(element.name + "-" + element.age)
  });
  return nickName;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);
```

## 08 - Conditionals & Loops

Implementare, tramite blocchi condizionali e/o cicli, la funzione `calculateAverageAge`, la quale, dato un array di persone, calcola l'età media.

```js
function calculateAverageAge(persons) {
  let total = 0;
  let count = 0;
  persons.forEach((element) => {
    total += element.age;
    count++;
  });

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
```

## 09 - Conditionals & Loops

Implementare, tramite blocchi condizionali e/o cicli, la funzione `getKeys`, la quale, dato in input un qualsiasi oggetto, restituisce la lista delle chiavi presenti al suo interno.

```js
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
```

## 10 - Conditionals & Loops

Implementare, tramite blocchi condizionali e/o cicli, la funzione `sumUntil`, la quale, dato in input un valore, effettua la somma di tutti i numeri che vanno da `1` fino al valore passato come parametro.

```js
function sumUntil(maxValue) {
  let array = [];
  for (let i = 0; i <= maxValue; i++) {
    array.push(i);
    console.log(array);
  }
  const summedNums = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(summedNums);
  return summedNums;
}

console.log(sumUntil(5));
```

## 11 - Arrow functions

Trasformare le due variabili funzione (`sum` e `log`) in due arrow functions.

```js
const sum = (a, b) => {
  return a + b;
}

const log = value => {
  console.log(value);
}

log(sum(2, 5));
```

## 12 - Arrow functions

Trasformare la variabile funzione `concat` in una arrow function

```js
const concat = (arr1, arr2) => {
  return arr1.concat(arr2);
}

console.log(concat([2, 4], [5, 1]));
```

## 13 - Arrow functions

Trasforma le variabili funzione in arrow functions e concatenale in modo tale che venga stampato sulla console il risultato della seguente operazione matematica: `((2 + 4) * (5 + 2) - 2) / 5`.

```js
const sum = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

const value = divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2),5);

const log = (value) => {
  console.log(value);
};

log(value);
```
