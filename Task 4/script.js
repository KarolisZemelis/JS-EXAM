/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
async function getUsers() {
  const response = await fetch(ENDPOINT);
  if (!response.ok) {
    throw new Error("Įvyko klaida: " + response.status);
  } else {
    const result = await response.json();

    const resultArray =(result.map((car)=>car.models))
    const mainContainer = document.getElementById('output')

    // const resultArray = Object.entries(result);
    // console.log(resultArray.map((car)=>car.models))
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].brand)
        console.log(resultArray[i])
        const brandContainer = document.createElement('div');
        brandContainer.setAttribute('class','brandContainer');
        brandContainer.innerHTML = `
        <h1>${result[i].brand}</h1>
        <h2>${resultArray[i]}</h2>
        `;
        main.append(brandContainer);
    }


  }
}

// function output(brand,models,mainContainer,brandContainer){
//     console.log('funkcija prasideda')
//     // const mainContainer = document.getElementById('#output')
//     // const brandContainer = document.createElement('div');
//     // brandContainer.setAttribute('class','brandContainer');
//     brandContainer.innerHTML = `
//     <h1>${brand}</h1>
//     <h2>${models}</h2>
//     `;
//     mainContainer.append(brandContainer);
// }

getUsers();
