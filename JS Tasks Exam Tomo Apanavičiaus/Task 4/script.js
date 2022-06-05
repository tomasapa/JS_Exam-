/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const output = document.getElementById("output");

const createTableHead = () => {
  const brand = document.createElement("th");
  brand.innerText = "Brand";

  const model = document.createElement("th");
  model.innerText = "Model(-s)";

  const tr = document.createElement("tr");
  tr.append(brand, model);

  const thead = document.createElement("thead");
  thead.append(tr);

  const tbody = document.createElement("tbody");

  const table = document.createElement("table");
  table.append(thead, tbody);
  output.append(table);
};

createTableHead();

function cardOfCars(cars) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  cars.forEach((car) => {
    const brand = document.createElement("th");
    brand.innerText = car.brand;

    const model = document.createElement("td");
    model.innerText = car.models;

    const tr = document.createElement("tr");
    tr.append(brand, model);
    tbody.append(tr);
  });
}

const test = fetch("./cars.json")
  .then((res) => res.json())
  .then((cars) => cardOfCars(cars))
  .catch((error) => console.error(error));
