/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */
'use strict'
const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];


// function filterDogOwners(array){
//   for (let i =0;i<array.length;i++){
//     if(array[i].hasDog === true){
//       console.log(`${array[i].name} has a dog`)
//     }
//   }
// }

function filterDogOwners(array){
  let hasDogArray = []
    for (let i =0;i<array.length;i++){
      if(array[i].hasDog === true){
        hasDogArray.push(array[i].name)
      }
    }
    return hasDogArray.forEach((owner)=> console.log(`${owner} has a dog`))
  }

function filterAdults(array){
  let adultArray = []
  for (let i =0;i<array.length;i++){
    if(array[i].age >= 18){
      adultArray.push(array[i])
    }
  }
  return adultArray
}

console.log(`filterDogOwners function might be overcoded, but the use of word "gražins" made me use return instead of regular console.log. 
Theres a comit with a simpler version of the code also commented off on lines 24-30.`)
filterDogOwners(users)
console.log('--**--Returns an array of adults--**--')
console.log(filterAdults(users))

