class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

//creazione di oggetti
const user1 = new User("Giovanni", "Sorti", 60, "Milano");
const user2 = new User("Aldo", "Baglio", 52, "Palermo");
const user3 = new User("Giacomo", "Poretti", 60, "Milano");

//comparazione tra le età
console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
console.log(user3.compareAge(user2));
