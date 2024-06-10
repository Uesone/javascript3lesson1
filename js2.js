class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");
const pets = [];

petForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);
  addPetToList(newPet);

  pets.forEach((pet) => {
    if (pet !== newPet && newPet.sameOwner(pet)) {
      console.log(
        `${newPet.petName} e ${pet.petName} condividono lo stesso padrone: ${newPet.ownerName}`
      );
    }
  });
});

function addPetToList(pet) {
  const li = document.createElement("li");
  li.textContent = `Nome Pet: ${pet.petName}, Nome Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
  petList.appendChild(li);
}
