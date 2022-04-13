// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
]

//Ascending
users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad (menor a mayor)")
console.log(users) // sorted ascending
//Outcome
// Ejemplo 16: Ordenando una lista de objetos por la edad
// [
//   { name: 'D', age: 22 },
//   { name: 'B', age: 50 },
//   { name: 'C', age: 100 },
//   { name: 'A', age: 150 }
// ]

//Descending
users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return 1
    if (a.age > b.age) return -1
    return 0
})

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad (mayor a menor)")
console.log(users) // sorted ascending
// Outcome
// Ejemplo 16: Ordenando una lista de objetos por la edad
// [
//   { name: 'A', age: 150 },
//   { name: 'C', age: 100 },
//   { name: 'B', age: 50 },
//   { name: 'D', age: 22 }
// ]

