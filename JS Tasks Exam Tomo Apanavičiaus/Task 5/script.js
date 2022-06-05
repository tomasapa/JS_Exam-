/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true },
];

let filterDogOwners = users.filter((user) => user.hasDog === true);

console.log(filterDogOwners);

let filterAdults = users.filter((user) => user.age >= 18);

console.log(filterAdults);

// Nors užduotyje neprašoma, bet rezultatus galima pažiūrėti ir html'e

const dogOwners = document.createElement("div");
document.body.append(dogOwners);
dogOwners.innerHTML = JSON.stringify(filterDogOwners);

dogOwners.style.background = "yellow";
dogOwners.style.width = "22rem";
dogOwners.style.margin = "auto";
dogOwners.style.fontSize = "1.5rem";

const adults = document.createElement("p");
document.body.append(adults);
adults.innerHTML = JSON.stringify(filterAdults);

adults.style.background = "coral";
adults.style.width = "22rem";
adults.style.margin = "auto";
adults.style.fontSize = "1.5rem";
