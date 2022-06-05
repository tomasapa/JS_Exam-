/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const btn = document.getElementById("btn");
const output = document.getElementById("output");
const message = document.getElementById("message");

const createTableHead = () => {
  const login = document.createElement("th");
  login.innerText = "Login";

  const avatar = document.createElement("th");
  avatar.innerText = "Avatar";

  const tr = document.createElement("tr");
  tr.append(login, avatar);

  const thead = document.createElement("thead");
  thead.append(tr);

  const tbody = document.createElement("tbody");

  const table = document.createElement("table");
  table.append(thead, tbody);
  output.append(table);
};

function userCard(users) {
  const tbody = document.querySelector("tbody");
  tbody.innerText = "";

  users.forEach((user) => {
    const login = document.createElement("th");
    login.innerText = user.login;

    const avatar = document.createElement("td");
    avatar.innerText = user.avatar_url;

    const tr = document.createElement("tr");
    tr.append(login, avatar);
    tbody.append(tr);
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  createTableHead();
  message.innerText = "";

  async function fetchUser() {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const users = await response.json();
        userCard(users);
      }
    } catch (error) {
      console.error(error);
    }
  }
  fetchUser();
});
