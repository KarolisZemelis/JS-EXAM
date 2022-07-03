/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
'use strict'
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(object){
  let keyArray = [];
  const keys = Object.keys(object); //būtų pakakę grąžinti tik šią eilutę, t.y. return Object.keys(object), kuri iš savęs jau yra masyvas
  keyArray.push(keys);
  return (keyArray)
}

console.log(showObjectKeys(audi))