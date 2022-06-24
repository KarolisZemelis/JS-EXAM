/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
'use strict'

function Calculator(a,b){
    this.numberA = a;
    this.numberB = b;
    this.sum = function(){
        return this.numberA + this.numberB
    }
    this.subtraction = function(){
        return this.numberA -this.numberB
    }
    this.multiplication = function(){
        return this.numberA * this.numberB
    }
    this.division = function(){
        return this.numberA / this.numberB
    }
}


var Calculation = new Calculator(10,5);
console.log(`Calculator sum method of ${Calculation.sum()}`);
console.log(`Calculator subtraction method ${Calculation.subtraction()}`);
console.log(`Calculator multiplication method ${Calculation.multiplication()}`);
console.log(`Calculator division method ${Calculation.division()}`);