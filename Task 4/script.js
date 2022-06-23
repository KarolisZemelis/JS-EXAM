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
const brandContainer = document.createElement('div');
const listElement = document.createElement('ul')
async function getUsers() {
  const response = await fetch(ENDPOINT);
  if (!response.ok) {
    throw new Error("Įvyko klaida: " + response.status);
  } else {
    const result = await response.json();

    const resultArray = result.map((car) => car.models);
    // console.log(resultArray[0])
    const modelArray = resultArray.map((model)=>model.models)
    // console.log(modelArray)
    for (let i = 0; i < result.length; i++) {
        let modelArray = resultArray[i].map((model)=>model)
        brandOutput(result[i].brand, mainContainer);
    //   output(result[i].brand, resultArray[i], mainContainer);
        for(let k = 0;k < resultArray[i].length;k++){
            console.log(modelArray[k])
            modelsOutput(modelArray[k],brandContainer)
        }
    }
  }
}

// function output(brand, models, mainContainer) {
//   const brandContainer = document.createElement("div");
//   brandContainer.setAttribute('class','brandContainer')
//   brandContainer.innerHTML = `
//     <h1 class='brand'>${brand}</h1>
//     <h2 class='models'>${models}</h2>
//     <ul>
//     <>
//     </ul>
//     `;
//   mainContainer.append(brandContainer);
// }
function brandOutput(brand, mainContainer) {
    // const brandContainer = document.createElement('div');
    brandContainer.setAttribute('class','brandContainer')
    brandContainer.innerHTML += `
      <h1 class='brand'>${brand}</h1>`;
    mainContainer.append(brandContainer);
  }

  function modelsOutput(models, brandContainer) {
    listElement.setAttribute('class','listElement')
    listElement.innerHTML += `<li>${models}</li>`
    brandContainer.append(listElement)
  }

getUsers();
