/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */
'use strict'
const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

function getUserAverageAge(array) {
  let agesArray = [];
  for (let i = 0; i < array.length; i++) {
    agesArray.push(array[i].age);
  }
  console.log(agesArray);
  const initialValue = 0;
  return Number(
    (
      agesArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      ) / array.length
    ).toFixed(0)
  );
}

function getUsersNames(array){
  let userNamesArray = []
  for (let i =0;i<array.length;i++){
      userNamesArray.push(array[i].name)
  }
  return userNamesArray
}

console.log(`The average age of users array is ${getUserAverageAge(users)}`);
console.log(getUsersNames(users))
