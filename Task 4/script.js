/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const mainContainer = document.getElementById("output");
async function getUsers() {
  const response = await fetch(ENDPOINT);
  if (!response.ok) {
    throw new Error("Įvyko klaida: " + response.status);
  } else {
    const result = await response.json();

    const resultArray = result.map((car) => car.models);

    for (let i = 0; i < result.length; i++) {
      output(result[i].brand, resultArray[i], mainContainer);
    }
  }
}

function output(brand, models, mainContainer) {
  const brandContainer = document.createElement("div");
  brandContainer.setAttribute('class','brandContainer')
  brandContainer.innerHTML = `
    <h1 class='brand'>${brand}</h1>
    <h2 class='models'>${models}</h2>
    `;
  mainContainer.append(brandContainer);
}

getUsers();
