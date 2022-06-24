/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict'
const ENDPOINT = "cars.json";
const mainContainer = document.getElementById("output");

async function getUsers() {
  const response = await fetch(ENDPOINT);
  if (!response.ok) {
    throw new Error("Įvyko klaida: " + response.status);
  } else {
    const result = await response.json();

    const resultArray = result.map((car) => car.models);
    const modelArray = resultArray.map((model) => model.models);
    for (let i = 0; i < result.length; i++) {
      let modelArray = resultArray[i].map((model) => model); //sukurima modeliu arreju
      const brandContainer = document.createElement("div"); //sukuriam containeri brandam ir ju modeliam
      brandContainer.setAttribute("class", "brandContainer"); //priskiriam klase stiliaus
      const unorderedList = document.createElement("ul"); //sukuriam ul elementa i kuri talpinsim modelius
    //   brandContainer.append(unorderedList); // patalpinam elementa i brando conteineri

      brandOutput(result[i].brand, brandContainer, unorderedList);
      for (let k = 0; k < resultArray[i].length; k++) {
        modelsOutput(modelArray[k], unorderedList);
      }
    }
  }
}

function brandOutput(brand, brandContainer, unorderedList) {
  brandContainer.innerHTML += `
      <h1 class='brand'>${brand}</h1>`;
  mainContainer.append(brandContainer); //patalpinam i main konreineri
  brandContainer.append(unorderedList);
}

function modelsOutput(models, unorderedList) {
  unorderedList.innerHTML += `<li class='models'>${models}</li>`;
}

getUsers();
