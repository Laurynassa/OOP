///////////////////////1//////////////////////
class Person {
  constructor(firstname, lastname, metai, emailas) {
    this.name = firstname;
    this.lname = lastname;
    this.age = metai;
    this.email = emailas;
  }

  getPersonInfo() {
    console.log(
      `vardas : ${this.name}, Pavarde : ${this.lname}, metai : ${this.age}, parasyk man laiska siuo pastu : ${this.email}`
    );
  }
}

const Jonas = new Person("Jonas", "Jonaitis", 25, "jonukas@gmail.com");
const Petras = new Person("Petras", "Jonaitis", 12, "Petras@gmail.com");
const Onute = new Person("Onute", "Jonaitis", 35, "Onute@gmail.com");
console.log(Jonas);
console.log(Petras);
console.log(Onute);
Jonas.getPersonInfo();
Petras.getPersonInfo();
Onute.getPersonInfo();

////////////////////////////2///////////////////////////
//Kivieciamas ant class
class Animal {
  static greeting() {
    console.log(`I am an animal specie!`);
  }
}

const minotaurus = new Animal();
console.log(minotaurus);
Animal.greeting();

///////////////////////////////3///////////////////////////////////

class Student extends Person {
  constructor(firstname, lastname, metai, emailas, kursas, pazv) {
    super(firstname, lastname, metai, emailas);
    this.course = kursas;
    this.grades = pazv;
  }
  getStudentInfo() {
    super.getPersonInfo();
    console.log(
      `vardas : ${this.name}, Pavarde : ${this.lname}, metai : ${this.age}, parasyk man laiska siuo pastu : ${this.email}, mano norimas kursas : ${this.course}, mano pazymiu vidurkis : ${this.grades}`
    );
  }
}
const Tomas = new Student(
  "Tomas",
  "Jonaitis",
  25,
  "jonukas@gmail.com",
  "Trecias",
  8
);
console.log(Tomas);
Tomas.getStudentInfo();

class Teacher extends Person {
  constructor(firstname, lastname, metai, alga, dalykas) {
    super(firstname, lastname, metai);
    this.subject = dalykas;
    this.salary = alga;
    this.topics = [];
  }
  isHappy() {
    if (this.salary > 1200) {
      console.log("Hoooray!!!!");
    } else if (this.salary > 800) {
      console.log(`Not Bad!`);
    } else {
      console.log(`F*ck this job!!!`);
    }
  }
  /////setina ir leidzia sumest i masyva
  setTopic(topikas) {
    this.topics.push(topikas);
  }
  getTopics() {
    this.topics.forEach((el) =>
      console.log(`mokytojas ${this.name}, mokina ${el}`)
    );
  }
}

const mokytojas1 = new Teacher("Tomas", "Jonaitis", 25, 1100, "Javascript");
console.log(mokytojas1);
mokytojas1.isHappy();
mokytojas1.setTopic("OOP");
const topikai = ["OOP", "array", "aaaa", "bbb"];
topikai.forEach((topics) => mokytojas1.setTopic(topics));
console.log(mokytojas1);
mokytojas1.getTopics();
