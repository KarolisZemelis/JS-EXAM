/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
'use strict'
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#search").value;
  // const outputValue = document.querySelector('#output').innerHTML;
  let pounds = Number(inputValue * 2.2046); //galima visur buvo naudoti const, nes reikšmės nesikeitė
  let grams = Number(inputValue / 0.001);
  let ounces = Number(inputValue * 35.274);
  const outputValue = (document.querySelector( //outputValue niekur nepanaudotas kintamasis. Priskyrimo nereikėjo
    "#output"
  ).innerHTML = `<h1 class='outputStyle'>Pounds (lb): ${pounds}</h1>;
    <h1 class='outputStyle'>Grams (g): ${grams}</h1>;
    <h1 class='outputStyle'>Ounces (oz): ${ounces}</h1>`);
});
