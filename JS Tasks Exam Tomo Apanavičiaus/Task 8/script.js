/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function CalculatorES5(a, b) {
  this.a = a;
  this.b = b;
  this.sum = function sum() {
    return this.a + this.b;
  };
  this.substraction = function sum() {
    return this.a - this.b;
  };
  this.multiplication = function sum() {
    return this.a * this.b;
  };
  this.division = function sum() {
    return this.a / this.b;
  };
}

// pvz.:
const calculator1 = new CalculatorES5(5, 6);

console.log(calculator1);
console.log(calculator1.a);
console.log(calculator1.b);
console.log(calculator1.sum());
console.log(calculator1.substraction());
console.log(calculator1.multiplication());
console.log(calculator1.division());

// Čia pateikiu ir ES6 variantą, nors ir nera prašoma (gal teisingai ir tinkamai sudėliojau):
class CalculatorES6 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum() {
    return this.a + this.b;
  }
  substraction() {
    return this.a - this.b;
  }
  multiplication() {
    return this.a * this.b;
  }
  division() {
    return this.a / this.b;
  }
}

// pvz.:
const calculator2 = new CalculatorES6(5, 6);

console.log(calculator2);
console.log(calculator2.a);
console.log(calculator2.b);
console.log(calculator2.sum());
console.log(calculator2.substraction());
console.log(calculator1.multiplication());
console.log(calculator2.division());
