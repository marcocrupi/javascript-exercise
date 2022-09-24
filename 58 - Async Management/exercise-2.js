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
