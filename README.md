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

## 24 - Object methods

Utilizzando l'oggetto `person` stampare in console i suoi valori, provando ad utilizzare il metodo `Object.values`.

```js
const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.values
console.log(Object.values(person));
```

## 25 - Object constructor

Creare l'oggetto `person` e definire al suo interno i metodi getters / setters per le proprietà: `firstName` e `lastName`. Definire all'interno dell'oggetto anche il metodo `fullName()` che si occupa di concatenare e restituire il nome e il cognome della persona. Infine, attraverso Object.create(), costruire due oggetti: `john` e `simon`, assegnare ad entrambi il valore di `firstName` e `lastName` e stampare in console il nome completo.

```js
const person = {
  _firstName: "Marco",
  _lastName: "Crupi",
  get firstName() {
    return this._firstName;
  },
  get lastName() {
    return this._lastName;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set firstName(newFirstName){
    this._firstName = newFirstName;
  },
  set lastName(newLastName){
    this._lastName = newLastName;
  }
};

console.log(person.fullName());

const john = Object.create(person);
const simon = Object.create(person);

john.firstName = "John";
john.lastName = "Doe";

console.log(john.fullName()); // John Doe

simon.firstName = "Simon";
simon.lastName = "Collins";

console.log(simon.fullName()); // Simon Collins
```

## 26 - Object constructor

Implementare la funzione `Person` che accetta e assegna due argomenti: `firstName` e `lastName` e definisce il metodo `fullName()`, il quale si occupa di concatenare e restituire il nome completo. Infine, istanziare due oggetti: `john` e `simon` tramite la keyword `new` utilizzando la funzione `Person` e stampare in console il nome completo.

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
}

let john = new Person("John", "Doe")
let simon = new Person("Simon", "Collins");

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
```


## 27 - Optional chaining

In questo esempio si sta cercando di eseguire il console.log di due proprietà non presenti all'interno dell'oggetto `person`, come posso sistemare il codice d'esempio così da non ricevere un errore in console?

```js
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(person?.address?.city);
console.log(person?.fullName?.()); 
```

## 28 - Optional chaining

In questo esempio si sta cercando di controllare se è stato specificato un valore per la proprietà `city`, tuttavia il codice si presenta in maniera poco leggibile.
Come si può migliorare e semplificare il codice d'esempio?

```js
const order = {};

 if (
   order &&
   order.customer &&
   order.customer.address &&
   !order.customer.address.city
 ) {
   console.log("City is required");
 }

const optionalChaining = !order?.customer?.address?.city || "City is required";
console.log(optionalChaining);
```

## 29 - Array Methods

Implementare la funzione `adultFilter` che, dato un array di persone, filtra e restituisce soltanto coloro che sono maggiorenni.

```js
function adultFilter(persons) {
 return persons.filter(function (obj) {
   return obj.age > 18;
 });
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

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
```

## 30 - Array Methods

Implementare la funzione `nicknameMap` che, dato un array di persone, crea un array di nickname. Il nickname deve essere formato in questa modo: `<name>-<age>`.

Esempio:

```
{ name: 'Paul', age: 21 } => Paul-21
```

```js
function nicknameMap(persons) {
const mapNick = persons.map((obj) => {
  return `${obj.name}-${obj.age}`
})
return mapNick;
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

## 31 - Array Methods

Implementare la funzione `ageAverage` che, dato un array di persone, calcola l'età media.

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

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
```

## 32 - Array Methods

Implementare la funzione `uncompletedNotes` che, dato un array di note, restituisce soltanto le note non completate.
Una nota viene considerata completata se **tutti** i todo presenti hanno il flag `done` impostato a `true`.

```js
function uncompletedNotes(notes) {
  let result = [];

  notes.forEach((element) => {
    if (element.todos.some((todo) => todo.done === false)) {
      result.push(element);
    }
  });

  return result;
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: true,
      },
    ],
  },
];

const notesInProgress = uncompletedNotes(notes);
console.log("All notes: ", notes);
console.log("Notes In Progress: ", notesInProgress);
```

## 33 - Array Methods

Implementare la funzione `firstUncompletedNote` che, dato un array di note, restituisce la prima nota non completata.
Una nota viene considerata completata se **tutti** i todo presenti hanno il flag `done` impostato a `true`.

```js
function firstUncompletedNote(notes) {
    let result = [];

    notes.forEach((element) => {
      if (element.todos.some((todo) => todo.done === false)) {
        result.push(element);
      }
    });

    return result[0];
}

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: true
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: false
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: false
      }
    ]
  },
  {
    id: 3,
    description: 'My Movies Library',
    todos: [
      {
        id: 1,
        name: 'La città incantata',
        done: true
      },
      {
        id: 2,
        name: 'Avatar',
        done: true
      },
      {
        id: 3,
        name: 'Titanic',
        done: false
      }
    ]
  }
]

const noteInProgress = firstUncompletedNote(notes);
console.log('All notes: ', notes);
console.log('First note in progress: ', noteInProgress);
```

## Extra 1 - Array

Scrivere una funzione che prenda come parametro un array e restituisca il secondo valore massimo.

const arr = [ 5, 9, 3, 13, 43, 2, 21 ];

```js
const secondMax = (arr) => {
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity); // compara ogni valore dell'array e sceglie il maggiore
  arr.splice(arr.indexOf(max), 1); // rimuove max dall'array
  return arr.reduce((a, b) => Math.max(a, b), -Infinity); // restituisce il secondo più grande
};

const arr = [5, 9, 3, 13, 43, 2, 21];
console.log("secondMax:", secondMax(arr));
console.log("Original array", arr);
```

## Extra 2 - Array

Scrivere una funzione che ti dica se  due parole sono anagrammi

```js
const stringOne = "incerta";
const stringTwo = "trincea";

const anagramDetect = (stringOne, stringTwo) => {

  // SOLUTION METHOD
  // const arrayOne = stringOne.split("");
  // const arrayTwo = stringTwo.split("");

  arrayOne = [];
  arrayTwo = [];
  for (i in stringOne) {
    arrayOne.push(stringOne[i]);
  }
  for (i in stringTwo) {
    arrayTwo.push(stringTwo[i]);
  }
  console.log(arrayOne);
  console.log(arrayTwo);

  if (arrayOne.sort().join(",") === arrayTwo.sort().join(",")) {
    console.log("Le due parole sono anagrammi");
  } else {
    console.log("Le due parole non sono anagrammi");
  }
};

anagramDetect(stringOne, stringTwo);
```

## 34 - Classes

Definire la classe `Person` che accetta due parametri nel costruttore `firstName` e `lastName`.

```js
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(`${developer.firstName} ${developer.lastName}`);
```

## 35 - Classes

Definire la classe `Developer` che eredita dalla classe `Person` e, oltre alle proprietà `firstName` e `lastName`, accetta nel costruttore anche la proprietà `role`.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role; 
  }
}

const developer = new Developer('Mario', 'Rossi', 'Front-end');
console.log(`${developer.firstName} ${developer.lastName} - ${developer.role}`);
```

## 36 - Classes

Definire all'interno della classe `Person` un metodo statico che, dato in input un object literal, istanzia un oggetto `Person`.

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromObject(obj) {
    let Person = Object.assign({}, obj);
    return Person;
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);
```

## 37 - Classes

Definire la classe `BankAccount` che, dato in input un importo iniziale, consente di eseguire operazioni di deposito, ritiro e visualizzazione sul proprio conto corrente. La classe in questione dovrà implementare i seguenti metodi:

* `deposit`: un metodo pubblico che consente di aggiungere fondi al proprio conto corrente.
* `withdraw`: un metodo pubblico che consente di ritirare fondi dal proprio conto corrente.
* `view`: un metodo pubblico che consente di visualizzare in console il saldo finale del conto corrente.

```js
class BankAccount {
  constructor(EUR) {
    this._EUR = EUR;
  }
  deposit(addEUR) {
    this._EUR += addEUR;
  }
  withdraw(subtractEUR) {
    this._EUR -= subtractEUR;
  }
  view() {
    console.log(this._EUR);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
```

## 38 - Classes

Definire la classe `BankAccountVip` che estendendo dalla classe `BankAccount`, oltre a consentire tutte le operazioni di quest'ultima, permette all'utente di ottenere un interesse del 3% sull'importo depositato, ma solo se quest'ultimo è maggiore o uguale a 1000€. Il risultato finale deve essere 5541.

```js
class BankAccount {
   constructor(initialAmount) {
    this._amount = initialAmount;
  }

  deposit(amount) {
    this._amount += amount;
  }

  withdraw(amount) {
    this._amount -= amount;
  }

  view() {
    console.log(this._amount);
  }
}

class BankAccountVip extends BankAccount {
  constructor(initialAmount) {
    super(initialAmount);
  }
  deposit(amount) {
    if (amount >= 1000) {
      super.deposit(amount + (amount / 100) * 3);
    } else {
      super.deposit(amount);
    }
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
```

## 39 - Classes

Definire la classe `AreaCalculator` che, tramite un metodo statico, si occupa di calcolare l'area della figura passata come parametro. Il metodo deve essere capace di calcolare l'area del quadrato, rettangolo e cerchio.

```js
class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure) {
    console.log(figure);
    if ("side" in figure) {
      return figure.side * figure.side;
    } else if ("width" && "height" in figure) {
      return figure.width * figure.height;
    } else if ("radius" in figure) {
      return Math.PI * figure.radius * figure.radius;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
```

## 40 - Classes

Definire la classe `Person` che accetta tre parametri nel costruttore: `firstName`, `lastName` e `age` e definisce per ciascuna di queste tre proprietà i rispettivi metodi getters e setters. Definire inoltre anche il metodo getter `fullName` che si occupa di restituire le proprietà nome e cognome concatenate.

```js
class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }

  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }
  set lastName(newLastName) {
    this._lastName = newLastName;
  }
  set age(newAge) {
    this._age = newAge;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
```

## 41 - Error handling

Implementare all'interno della classe `BankAccount` un controllo sui metodi `deposit` e `withdraw`.
Entrambi i metodi devono poter lanciare un errore qualora venisse passato un `amount` negativo.
Il metodo `withdraw` deve poter lanciare un errore anche qualora venisse passato un `amount` superiore rispetto al totale presente sul conto corrente.

```js
class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    try {
      if (amount < 0) {
        throw new Error("Amount è negativo");
      }
      this.#amount += amount;
    } catch (err) {
      console.log(err);
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    try {
      if (amount < 0) {
        throw new Error("Amount è negativo");
      }
      if (amount > this.#amount) {
        throw new Error(
          "Amount è superiore rispetto al totale presente sul conto corrente"
        );
      }

      this.#amount -= amount;
    } catch (err) {
      console.log(err);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
```

## 42 - Error handling

L'esercizio precedente lanciava un errore durante la fase di prelevamento. In questo esercizio occorre gestire l'errore per evitare il crash dell'applicazione.

```js
class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    try {
      if (amount < 0) {
        throw new Error("Amount è negativo");
      }
      this.#amount += amount;
    } catch (err) {
      console.log("name", err.name);
      console.log("message", err.message);
      console.log("stack", err.stack);
      console.log(err);
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    try {
      if (amount < 0) {
        throw new Error("Amount è negativo");
      }
      if (amount > this.#amount) {
        throw new Error(
          "Amount è superiore rispetto al totale presente sul conto corrente"
        );
      }

      this.#amount -= amount;
    } catch (err) {
      console.log("name", err.name);
      console.log("message", err.message);
      console.log("stack", err.stack);
      console.log(err);
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
```

## 43 - Error handling

Sostituire il lancio delle eccezioni con due classi custom che estendono dalla classe `Error`:

* `NegativeAmountError`: classe custom qualora viene fornito un importo negativo.
* `WithdrawNotPermittedError`: classe custom qualora si cerca di ritirare dal proprio conto corrente un importo maggiore rispetto al totale consentito.

```js
class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("The amount provided cannot be negative"); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error("The amount provided cannot be negative"); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw new Error("You cannot withdraw more than account balance"); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeAmountError";
  }
}

class withdrawNotPermittedError extends Error {
  constructor(message) {
    super(message);
    this.name = "WhitdrawNotPermittedError";
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log(
    "Something went wrong during bank account operations: " + e.message
  );
}
```

## 44 - Destructuring assignment

Utilizzare la destrutturazione, al posto di una variabile temporanea, per eseguire lo swapping delle variabili (per swapping s'intende lo scambio di valori tra due variabili).

Suggerimento: fare riferimento alla documentazione ufficiale <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>

```js
let num1 = 10;
let num2 = 20;
console.log("Before swap: ", num1, num2); // Before swap: 10 20

// Variable swapping
[num1, num2] = [num2, num1];

console.log("After swap: ", num1, num2); // After swap: 20 10
```

## 45 - Destructuring assignment

Utilizzare la destrutturazione per eseguire l'assegnazione dei valori tramite un'unica linea di codice.

```js
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

let {id, firstName,lastName,age} = person;

console.log(id, firstName, lastName, age);
```

## 46 - Destructuring assignment

Utilizzare la destrutturazione per semplificare il controllo sull'età della persona, modificando il parametro della funzione.
Suggerimento: fare riferimento alla documentazione ufficiale <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>.

```js
function isAdult({age}) {
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));
```

## 47 - Destructuring assignment

Utilizzare la destrutturazione per stampare la lista dei valori delle proprietà presenti in `person`:

```
id: 1
firstName: Mario
lastName: Rossi
age: 25
```

```js
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for (let [key,value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
```

## 48 - Destructuring assignment

La destrutturazione restituisce `undefined` per le proprietà: `name`, `surname` e `old`.
Sai sistemare il codice affinché, pur mantenendo gli stessi nomi di proprietà per l'oggetto `person`, posso eseguire una rinominazione in fase di destrutturazione?

```js
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName: name, lastName: surname, age: old } = person;
console.log(id, name, surname, old);
```

## 49 - JSON methods

Implementare il codice necessario per convertire l'oggetto `developer` in un json.

```js
class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
// Print developer as json object
const devJson = JSON.stringify(developer);
```

## 50 - JSON methods

Implementare il metodo `fromJson` che accetta un json e istanzia un oggetto di tipo `Person`.

```js
class Person {
  constructor(id, firstName, lastName, age,json) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
  static fromJson(json) {
    return JSON.parse(json);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);
```

## 51 - JSON methods

In questo esercizio le cose non vanno come dovrebbero, nonostante abbia creato una copia di `person1`, modificando la proprietà `city` di `person2` viene modificato anche il valore per `person1`, questo avviene perché ho creato una shallow copy.
Come posso sistemare il codice affinché modificando il valore di `person2` questo non modifichi anche `person1`?

```js
const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

const person2 = JSON.parse(JSON.stringify(person1));
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);
```

## 52 - JSON methods

In questo esercizio occorre filtrare le proprietà dell'oggetto `person` affinché vengono codificate in json solo i valori numerici (vale a dire `id` e `age`).

```js
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(person, person.firstName = undefined, person.lastName = undefined);

console.log(json); // Should return: { id: 1, age: 25 }
```

## 53 - Rest parameters and spread syntax

La funzione `sum` presenta un elevato numero di parametri in ingresso, come possiamo migliorare il codice affinché eccetti un numero indefinito di valori da sommare?

```js
function sum(...num) {
    return num[0] + num[1] + num[2] + num[3] + num[4];
}

console.log(sum(1, 2, 3, 4, 5));
```

## 54 - Rest parameters and spread syntax

Come posso migliorare la leggibilità del codice estraendo la proprietà `id` dall'oggetto `person` e mantenere aggregate il resto delle proprietà all'interno dell'oggetto `personInfo`?

```js
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
```

## 55 - Rest parameters and spread syntax

Come mergiare il valore di `newNumber` all'interno di `numberStore` senza utilizzare il metodo `push`?

```js
let numberStore = [0, 1, 2];
let newNumber = 3;
numberStore = [...numberStore, newNumber];
console.log(numberStore);
```

## 56 - Rest parameters and spread syntax

Come migliorare il codice affinché si eviti di specificare ad uno a uno i valori da passare alla funzione `sum`?

```js
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
```

## 57 - Async Management

Implementare la funzione `fetchPersonById`, la quale riceve in input un id e restituisce una `Promise` contenente l'oggetto della persona corrispondente a quell'id.

```js
const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    persons.forEach((element) => {
      if (id === element.id) {
        resolve(element);
      }
    });
  });
}

// code here
let promise = fetchPersonById(2);
promise.then((id) => {
  return console.log(id);
});
```

## 58 - Async Management

Migliorare la funzione `fetchPersonById`, in modo tale che la `Promise` venga rigettata qualora non esiste una persona con l'id passato come parametro.

```js
const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    persons.forEach((element) => {
      if (id === element.id) {
        resolve(element);
      }
    });
    reject(new Error("Questo id non esiste!"));
  });
}

// code here
let promise = fetchPersonById(4);
promise.then((id) => {
  return console.log(id);
});
```

## 59 - Async Management

Alla funzione `fetchPersonById` è stata aggiunta la chiamata a `JSON.stringify`, così facendo la `Promise`, una volta risolta, restituirà un oggetto persona sotto forma di json. Utilizzando la concatenazione delle `Promise`, implementare il codice necessario per parsare il json e stamparne il risultato in console.

```js
const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

// core here
let promise = fetchPersonById(3);
promise.then((id) => {
  const newObj = JSON.parse(id);
  return console.log(newObj);
});
```

## 60 - Async Management

Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono restituire rispettivamente:

* La persona che ha come identificativo l'id passato come parametro
* Il tipo di lavoro che ha come identificativo l'id passato come parametro

Infine implementare il codice necessario che si occupa di stampare in console la persona e il tipo di lavoro trovato.
N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le `Promise` sono state risolte.

```js
const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      
      if (person) {
        return resolve(person);
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id);
      
      if (job) {
        return resolve(job);
      }

      return reject(`Job with id: ${id} doesn't exist`);
    }, 1000);
  });
}

// core here
let promiseP = fetchPersonById(3);
promiseP.then((id) => {
  return console.log(id.firstName);
});

let promiseJ = fetchJobById(3);
promiseJ.then((id) => {
  return console.log(id.jobTitle);
});
```

## 61 - Async Management

Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono restituire rispettivamente:

* La persona che ha come identificativo l'id passato come parametro
* Il tipo di lavoro che ha come identificativo l'id passato come parametro

La prima funzione (`fetchPersonById`) deve restituire una `Promise` con un delay di 1000 millesecondi (`setTimeout`)
La prima funzione (`fetchJobById`) deve restituire una `Promise` con un delay di 500 millesecondi (`setTimeout`)

Infine implementare il codice necessario che si occupa di stampare in console il risultato della **prima** `Promise` che viene risolta.
N.B: esiste un metodo che, dato in input un array di `Promise`, attende fino a quando una delle `Promise` non viene risolta o rigettata.

```js
const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((item) => item.id === id);

      if (person) {
        return resolve(person);
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((item) => item.id === id);

      if (job) {
        return resolve(job);
      }

      return reject(`Job with id: ${id} doesn't exist`);
    }, 500);
  });
}

// core here
let promiseP = fetchPersonById(3);

let promiseJ = fetchJobById(3);

Promise.race([promiseP, promiseJ]).then((values) => {
  console.log(values);
});
```

## 62/63 - Async Management

es. 62: In questo esercizio occorre richiamare la funzione `fetchPersonById` passando come id il valore `2` e stampare il risultato restituito in console. Per ottenere il valore restituito dalla `Promise` utilizzare le keywords `async/await`.

es. 63: In questo esercizio è stato volutamente passato un id non valido alla funzione fetchPersonById. Implementare il codice necessario per gestire l'eccezione lanciata dalla Promise.

```js
const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((item) => item.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

async function personAsync() {
  try {
    const personId = await fetchPersonById(2);
    const personIdParse = JSON.parse(personId);
    console.log(personIdParse);
  } catch (err) {
    console.log("Errore dal catch:",err);
  }
}

personAsync();
```

## 64 - Browser Storing Data

Implementare il codice necessario per:

* Recuperare il post presente al seguente url: <https://jsonplaceholder.typicode.com/posts/1> al click del pulsante "Fetch Post"
* Salvare il post sul localStorage al click del pulsante "Save Post on LocalStorage"
* Per svolgere l'esercizio utilizzando Node, bisogna installare la libreria node-fetch, scrivendo nel terminale il seguente comando: npm i node-fetch.

```html
<html>
  <body>
    <div id="container">
      <button type="button" id="fetch-post" onclick="fetchPost()">
        Fetch Post
      </button>
      <button type="button" id="save-post" onclick="savePost()">
        Save Post on LocalStorage
      </button>
    </div>
  </body>
</html>

<script>
  let post;

  async function fetchPost() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      post = await response.json();
      console.log(post);
    } catch (err) {
      console.log(err);
    }
  }

  async function savePost() {
    try {
      localStorage.setItem("post", JSON.stringify(post));
      const getLocal = localStorage.getItem("post");
      const parseLocal = JSON.parse(getLocal);
      console.log(parseLocal);
    } catch (err) {
      console.log(err);
    }
  }
</script>
```

## 65 - Browser Storing Data

Implementare il codice necessario per:

* Recuperare il post presente all'interno del LocalStorage (salvato tramite l'esercizio precedente)
* Visualizzare all'interno dell'elemento `#post-title` il titolo del post recuperato dal LocalStorage

```html
<html>
  <body>
    <div id="container">
      <button type="button" id="fetch-post" onclick="fetchPost()">
        Fetch Post from LocalStorage
      </button>

      <h2>Post: <span id="post-title"></span></h2>
    </div>
  </body>
</html>

<script>
  let post;
  const titlePost = document.getElementById("post-title");

  async function fetchPost() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      post = await response.json();
      localStorage.setItem("post", JSON.stringify(post));
      const getLocal = localStorage.getItem("post");
      const parseLocal = JSON.parse(getLocal);
      console.log(parseLocal);
      titlePost.innerHTML = parseLocal.title;
    } catch (err) {
      console.log(err);
    }
  }
</script>
```

## 66 - Network Requests

Implementare il codice necessario per recuperare tramite una richiesta HTTP la lista dei todos presente al seguente url: https://jsonplaceholder.typicode.com/todos. Successivamente creare dinamicamente una lista di elementi (`<li>`) contenente il titolo del todo (proprietà `title` presente nella collezione di oggetti restituiti dalla response) e appenderla all'elemento `.todo-list`.

N.B: il body della response contiene la lista dei todos in formato json, utilizzare il metodo `.json` presente nella response per eseguire la deserializzazione.

```html
<html>
  <body>
    <div id="container">
      <ul class="todo-list"></ul>
    </div>
  </body>
</html>

<script>
  let todos;

  async function fetchPost() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      todos = await response.json();
      todos.forEach((element) => {
        const ul = document.querySelector(".todo-list");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element.title));
        ul.appendChild(li);
      });
    } catch (err) {
      console.log(err);
    }
  }

  fetchPost();
</script>
```

## 67 - Network Requests

Implementare il codice necessario per recuperare tramite una richiesta HTTP il todo con id 4 tramite il seguente url: https://jsonplaceholder.typicode.com/todos/4. Successivamente creare due elementi:

* Un elemento `<h2>` contenente il titolo del todo (proprietà `title`)
* Un elemento `<input type="checkbox">` con la proprietà `checked` impostata al valore presente per la proprietà `completed` del todo

Appendere all'interno del container i due elementi precedentemente creati.

```html
<html>
  <body>
    <div id="container" style="display: flex; align-items: center;"></div>
  </body>
</html>

<script>
  let todos;

  async function fetchPost() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );
      todos = await response.json();
      console.log(todos);
      const div = document.getElementById("container");
      const h2 = document.createElement("h2");
      const check = document.createElement("INPUT");
      check.setAttribute("type", "checkbox");
      check.checked = todos.completed;
      h2.appendChild(document.createTextNode(todos.title));
      div.appendChild(h2);
      div.appendChild(check);
    } catch (err) {
      console.log(err);
    }
  }

  fetchPost();
</script>
```

## 68 - Network Requests

Implementare il codice necessario per eseguire una richiesta HTTP che si occupa di creare un nuovo post. Per creare un nuovo post utilizzare il seguente url: https://jsonplaceholder.typicode.com/posts (metodo: POST). Il corpo della richiesta deve contenere un oggetto post con le seguenti informazioni: `title` e flag `completed`. I dati del post dovranno essere trasmessi in seguito alla compilazione di un form.

Link tutorial: https://simonplend.com/how-to-use-fetch-to-post-form-data-as-json-to-your-api/

```html
<html>
  <body>
    <div id="container">
      <form
        action="https://jsonplaceholder.typicode.com/users"
        id="example-form"
      >
        <div>
          <label>Title</label>
          <input type="text" name="title" id="todo-title" />
        </div>
        <div>
          <label>Completed</label>
          <input type="checkbox" name="completed" id="todo-completed" />
        </div>

        <button type="submit" id="submit-todo" value="Create new post">
          Submit
        </button>
      </form>
    </div>
  </body>
</html>

<script>
  const exampleForm = document.getElementById("example-form");

  exampleForm.addEventListener("submit", handleFormSubmit);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;

    try {
      const formData = new FormData(form);

      const responseData = await postFormDataAsJson({ url, formData });
      console.log({ responseData });
    } catch (error) {
      console.error(error);
    }
  }

  async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return response.json();
  }
</script>

<!-- ALTERNATIVE VERSION WITHOUT FormData() -->

<!-- <html>
  <body>
    <div id="container">
      <form>
        <div>
          <label>Title</label>
          <input type="text" id="todo-title" />
        </div>
        <div>
          <label>Completed</label>
          <input type="checkbox" id="todo-completed" />
        </div>

        <button type="submit" id="submit-todo">Submit</button>
      </form>
    </div>
  </body>
</html>

<script>
    async function createPost(e) {
      e.preventDefault();

      try {
        const todoData = {
          title: document.querySelector("#todo-title").value,
          completed: document.querySelector("#todo-completed").checked,
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: 'POST',
          headers: { 'Content-type': 'application/json; charset=utf-8' },
          body: JSON.stringify(todoData),
        });

        const commit = await response.json();
        console.log(commit);

      } catch (error) {
        console.log(error);
      }
    }

document.getElementById("submit-todo").addEventListener('click', createPost);

</script> -->
```

## 69 - Dom Tree

Implementare il codice necessario per recuperare il contenuto del campo di testo `firstName` e stamparlo in console.
N.B: utilizzare l'id come selettore.

```html
<html>
  <body>
    <div id="container">
      <form>
        <div>
          <label>First Name:</label>
          <input type="text" class="form-input" id="firstName" value="Mario" />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" class="form-input" id="lastName" value="Rossi" />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" class="form-input" id="age" value="25" />
        </div>
      </form>
    </div>
  </body>
</html>

<script>
  const firstName = document.getElementById("firstName");
  console.log(firstName.value);

  const digit = (e) => {
    console.log(e);
  };

  firstName.addEventListener("input", function () {
    digit(firstName.value);
  });
</script>
```

## 70 - Dom Tree

Implementare il codice necessario per recuperare il contenuto del primo campo di testo e stamparlo in console.
N.B: utilizzare la classe come selettore.

```html
<html>
  <body>
    <div id="container">
      <form>
        <div>
          <label>First Name:</label>
          <input type="text" class="form-input" id="firstName" value="Mario" />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" class="form-input" id="lastName" value="Rossi" />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" class="form-input" id="age" value="25" />
        </div>
      </form>
    </div>
  </body>
</html>

<script>
  const firstName = document.getElementsByClassName("form-input")[0];
  console.log(firstName.value);

  const digit = (e) => {
    console.log(e);
  };

  firstName.addEventListener("input", function () {
    digit(firstName.value);
  });
</script>
```
