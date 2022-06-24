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
"use strict";
const ENDPOINT = "https://api.github.com/users";

const fetchUser = async (user) => {
  try {
    const message = document.getElementById("message");
    message.style.display = "none";
    const result = await fetch(ENDPOINT);
    const data = await result.json();
    let output = document.querySelector("#output");
    let colors = ["#ff0000", "#00ff00", "#0000ff"];
    data.forEach((user) => {
      let userContainer = document.createElement("div");

      const getRandomNumber = (maxNum) => {
        return Math.floor(Math.random() * maxNum);
      };

      const getRandomColor = () => {
        const h = getRandomNumber(360);
        const s = getRandomNumber(100);
        const l = getRandomNumber(100);
        return `hsl(${h}deg, ${s}%, ${l}%)`;
      };

      const setBackgroundColor = () => {
        const randomColor = getRandomColor();
        userContainer.style.backgroundColor = randomColor;
      };

      userContainer.style.backgroundColor = setBackgroundColor();

      userContainer.setAttribute("class", "individualContainer");
      userContainer.innerHTML += `
            <h2 class='login'>${user.login}</h2>
            <img class='avatar' src='${user.avatar_url}'>
            <div class='passwordContainer'>Press <a class='password' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>here </a> to get password
            </div>`;
      output.append(userContainer);
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

document.querySelector("#btn").addEventListener("click", fetchUser);
document.querySelector("#btn").addEventListener("click", fetchUser);
