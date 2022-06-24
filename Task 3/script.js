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
'use strict'
const ENDPOINT = "https://api.github.com/users";

const fetchUser = async (user) => {
  try {
    const message = document.getElementById("message");
    message.style.display = "none";
    const result = await fetch(ENDPOINT);
    const data = await result.json();
    let output = document.querySelector("#output");
    data.forEach((user) => {
      let userContainer = document.createElement("div");
      userContainer.setAttribute("class", "individualContainer");
      userContainer.innerHTML += `
            <h2 class='login'>${user.login}</h2>
            <img class='avatar' src='${user.avatar_url}'>
            `;
      output.append(userContainer);
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

document.querySelector("#btn").addEventListener("click", fetchUser);
ocument.querySelector('#btn').addEventListener('click', fetchUser)