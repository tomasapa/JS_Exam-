/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const kilos = document.getElementById("search");
const output = document.getElementById("output");
const pounds = 2.2046;
const grams = 0.001;
const ounce = 35.274;

document.getElementById("output").style.maxWidth = "40%";
document.getElementById("output").style.textAlign = "center";
document.getElementById("output").style.margin = "2rem auto";
document.getElementById("output").style.background = "#f7f7f7";
document.getElementById("output").style.fontSize = "2em";
document.getElementById("output").style.fontWeight = "bold";

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const kilosValue = kilos.value;
  output.innerText = `\n Result:\n\n ${kilosValue * pounds}  lb \n ${
    kilosValue / grams
  } g \n ${kilosValue * ounce} oz \n \n`;

  // šį "border'į" dėl stilaius įdomumo įdėjau po formos "submit'inimo", nes, mano manimu taip dailiau save parodo
  document.getElementById("output").style.border = "0.2px solid black";
});
