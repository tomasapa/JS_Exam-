/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 100000000 ? true : false;
  }
}

// pvz.:
const movie1 = new Movie(
  "Star Wars: Episode III – Revenge of the Sith",
  "George Lucas",
  113000000
);

console.log(movie1);
console.log(movie1.title);
console.log(movie1.director);
console.log(movie1.budget);
console.log(movie1.wasExpensive());

// Buvo mintis metodo sąlygą prilyginti - Math.pow(10, 7), bet susilaikiau, nes suabejojau ar šiam (filmų biudžeto) palyginimui, vertėtų tai naudoti :)
