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
