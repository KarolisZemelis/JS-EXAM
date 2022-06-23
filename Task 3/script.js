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

const ENDPOINT = 'https://api.github.com/users';

const fetchUser = async (user) => {
    try {
        const message = document.getElementById('message');
        message.style.display = 'none';
        const result = await fetch(ENDPOINT);
        const data = await result.json();
        let output = document.querySelector('#output');
    return data
    }
    catch(error){
        console.log(error)
    }
}

document.querySelector('#btn').addEventListener('click', fetchUser)