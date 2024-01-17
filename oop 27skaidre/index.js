///////////////////////////1/////////////////////////////
class Animal {
  constructor(name, age) {
    this.vardas = name;
    this.amzius = age;
  }
  setAge() {
    this.amzius++;
  }
  getInfo() {
    console.log(`vardas : ${this.vardas}, metai : ${this.amzius}`);
  }
}
const sernas = new Animal("Sernas", 5);
console.log(sernas);
sernas.setAge();
console.log(sernas);
sernas.getInfo();

class Dog extends Animal {
  constructor(name, age, fur, legs) {
    super(name, age);
    this.kailis = fur;
    this.kojos = legs;
  }

  getInfo() {
    console.log(
      `Vardas : ${this.vardas}, amzius : ${this.amzius}, Kailio spalva : ${this.kailis}, koju skaiicus : ${this.kojos}`
    );
  }
}
const dog = new Dog("Reksas", 4, "pilka", 4);
console.log(dog);
dog.setAge();
dog.getInfo();
console.log(dog);
