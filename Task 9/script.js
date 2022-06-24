/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
'use strict'

class Movie{
    constructor(title,director,budget){
        this.title = title;
        this.director = director;
        this.budget = Number(budget);
    }
    wasExpensive(){
        return this.budget >= 100000000
    }
}

const theGodfather = new Movie('The Godfather','Francis Ford Coppola',7200000);
console.log(theGodfather)
console.log(theGodfather.wasExpensive())

const potcOnStrangerTides = new Movie('Pirates of the Caribbean: On Stranger Tides','Rob Marshall',410600000);
console.log(potcOnStrangerTides)
console.log(potcOnStrangerTides.wasExpensive())