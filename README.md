# JAVASCRIPT EXERCISES SOLUTIONS

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
```

## 09 - Conditionals & Loops

Implementare, tramite blocchi condizionali e/o cicli, la funzione `getKeys`, la quale, dato in input un qualsiasi oggetto, restituisce la lista delle chiavi presenti al suo interno.

```js
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
```

## 10 - Conditionals & Loops

Implementare, tramite blocchi condizionali e/o cicli, la funzione `sumUntil`, la quale, dato in input un valore, effettua la somma di tutti i numeri che vanno da `1` fino al valore passato come parametro.

```js
function sumUntil(maxValue) {
  let array = [];
  for (let i = 0; i <= maxValue; i++) {
    array.push(i);
  }
  let total = 0;
  let i;
  for (i in array) {
    total = total + array[i];
  }
  return total;
}

console.log(sumUntil(5));

// ALTERNATIVE SOLUTION

// function sumUntil(maxValue) {
//   let array = [];
//   for (let i = 0; i <= maxValue; i++) {
//     array.push(i);
//     console.log(array);
//   }
//   const summedNums = array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
//   console.log(summedNums);
//   return summedNums;
// }

// console.log(sumUntil(5));
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

Trasformare la variabile funzione `concat` in una arrow function.

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

## 14 - Closure

Implementare la funzione `greet` che accetta come argomento un saluto (`greeting`) e restituisce una closure che si occupa di concatenare il saluto passato come parametro con il nome della persona da salutare.

```js
function greet(greeting) {
  return function(name) {
    return `${greeting} ${name}`;
  }
}

const greetWithHello = greet('Hello');
const greetWithBye = greet('Bye');
const greetWithHi = greet('Hi');

const greetPaulWithHello = greetWithHello('Paul');
const greetPaulWithHi = greetWithHi('Paul');
const greetJohnWithBye = greetWithBye('John');
const greetSimonWithHello = greetWithHello('Simon');

console.log(greetPaulWithHello);
console.log(greetPaulWithHi);
console.log(greetJohnWithBye);
console.log(greetSimonWithHello);
```

## 15 - Closure

Implementare la funzione `pow` che accetta come argomento la base (`base`) e restituisce una closure che si occupa di elevare a potenza la base per l'esponente passato come parametro.

```js
function pow(base) {
  return function (esponente) {
    return base ** esponente;
  };
}

const pow2 = pow(2);
const pow5 = pow(5);

console.log("--- Power of 2 ---");
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));

console.log("--- Power of 5 ---");
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));
```

## 16 - Closure

Implementare la funzione `createStore` che crea un array vuoto di prodotti e restituisce una closure che si occupa di aggiungere prodotti allo store. Per ogni prodotto aggiunto allo store eseguire il `console.log` dell'intero store.

```js
function createStore() {
  let prodotti = [];
  return function (prodotto) {
    prodotti.push(prodotto);
    console.log(prodotti);
  };
}

const redPants = { id: 1, name: "Red Pants" };
const whiteHat = { id: 2, name: "White Hat" };
const blackSneakers = { id: 3, name: "Black Sneakers" };

console.log("--- Dress Store ---");
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);

console.log("--- Shoes Store ---");
const shoesStore = createStore();
shoesStore(blackSneakers);
```

## 17 - Closure

Implementare la funzione `calculate` che restituisce un oggetto che dia la possibilità di eseguire le quattro operazioni matematiche (somma, sottrazione, moltiplicazione e divisione) su uno stesso numero e infine consente di stamparne il risultato.

**TIP**: Per concatenare i metodi basta restituire il riferimento all'oggetto stesso (`$this`).

```js
function calculate() {
  let result = 0;

  let calculator = {
    add: function (number) {
      result += number;
      return this;
    },
    multiply: function (number) {
      result *= number;
      return this;
    },
    sub: function (number) {
      result -= number;
      return this;
    },
    divide: function (number) {
      result /= number;
      return this;
    },
    printResult: function () {
      return result;
    },
  };
  return calculator;
}

const calculator = calculate();
let result = calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
console.log(result);
```

## 18 - Closure

Implementare la funzione `memoize` che, data in input la funzione per il calcolo del fattoriale, restituisce una closure che accetta come argomento un numero su cui eseguire la funzione per il calcolo del fattoriale, verifica se il risultato è già presente all'interno della variabile `cache`, se è presente restituisce immediatamente il risultato memorizzato precedentemente, altrimenti esegue la funzione passata come argomento e memorizza il risultato all'interno della variabile `cache`, così da servire il risultato cachato precedentemente qualora venga richiesto il fattoriale per lo stesso numero.

Esempio:
```
let factory = memoize(factorial);
console.log(factorial(10)); // Calculating result for 3628800
console.log(factorial(6)); // Fetching from cache for 720
console.log(factorial(5)); // Fetching from cache for 120
```

Se il valore è stato già calcolato precedentemente restituire una stringa `Fetching from cache for {valore_passato_in_input}`, altrimenti, se non è stato ancora calcolato, restituire una stringa: `Calculating result for {valore_passato_in_input}`. Inoltre modificare l'esempio in:
`
let factory = memoize(factorial);
console.log(factorial(10)); // Calculating result for 10
console.log(factorial(6)); // Calculating result for 6
console.log(factorial(5)); // Calculating result for 5
console.log(factorial(5)); // Fetching from cache for 5
`

```js
function memoize(fn) {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log("Fetching from cache for", n);
      return cache[n];
    } else {
      console.log("Calculating result for", n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

let factory = memoize(factorial);
console.log(factory(10));
console.log(factory(6));
console.log(factory(5));
```

## 19 - Object copying

In questo esercizio sono stati creati due oggetti: `person1` e `person2`. All'oggetto `person2` è stato assegnato l'oggetto `person1`. Si desidera che venga modificata la proprietà `firstName` dell'oggetto `person2` in "Simon".

Spiega con un commento scritto il perché, modificando l'oggetto `person2`, viene modificato anche l'oggetto `person1`.

```js
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
```

## 20 - Object copying

In questo esercizio si desidera creare una copia esatta di `person1` e assegnarla alla variabile `person2`, permettendo così di modificare il `firstName` di `person2`, senza che venga modificato anche il valore `firstName` di `person1`.

```js
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// Modifica la linea sottostante affinché venga creata e assegnata a person2 
// una copia esatta di person1, permettendo così di modificare il "firstName" di person2,
// senza che venga modificato anche il valore "firstName" di person1
const person2 = Object.assign({}, person1);

person2.firstName = 'Simon';

console.log(person1);
console.log(person2);
```

## 21 - Object copying

In questo esercizio si desidera creare una copia esatta di `person1` e assegnarla alla variabile `person2`, tuttavia utilizzando il metodo `Object.assign()` e modificando la proprietà `address`, questa viene modificata anche per l'oggetto `person1`. Come posso eseguire un "deep copying" dell'oggetto `person1`?

```js
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1
const person2 = JSON.parse(JSON.stringify(person1));

person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log("person 1", person1);
console.log("person 2", person2);
```

## 22 - Object references

Creare all'interno dell'oggetto `person` i metodi: `fullName()` e `info()`, i quali utilizzano le proprietà dell'oggetto per stampare rispettivamente il nome completo e le informazioni anagrafiche comprensive di posizione lavorativa.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  job: "Web Developer",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  info() {
    return `${this.age} - ${this.job}`;
  },
};

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer
```

## 23 - Object methods

Utilizzando l'oggetto `person`, stampare in console le coppie chiave/valore, provando ad utilizzare il metodo `Object.keys`.

```js
const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
console.log(Object.keys(person));
```
