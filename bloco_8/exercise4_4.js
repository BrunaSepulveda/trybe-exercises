/*Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
Dica: use object destructuring.

function fantasyOrScienceFiction() {
  const booksList = books.filter((element) => { 
      return element.genre === 'Ficção Científica' || element.genre === 'Fantasia'
})
  return booksList;
};
 */

const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

const filterPeople = (array) => {
    const filter = array.filter(({nationality, bornIn})=>{
       return nationality === "Australian" && bornIn <= 2000
    });
    return filter
};
// escreva filterPeople abaixo

const filteredPeople = filterPeople(people) 

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })