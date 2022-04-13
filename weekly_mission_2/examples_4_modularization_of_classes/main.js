import Viajero from './viajero.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

const viajero1 = new Viajero("Julieta", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero1)

// Output
// Viajero {
//     name: "Julieta",
//     username: "LaunchX",
//     mission: "Node JS",
//     cycle: "Abril 2022"
// }

console.log(viajero1.getNameAndUsername()) // Método de la clase padre
// Output
// Explorer Julieta, username: LaunchX

console.log(viajero1.getGeneralInfo()) // Método de la clase hija
// Output
// Explorer Julieta, username: LaunchX, Ciclo LaunchX