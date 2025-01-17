// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Australia', 'Norway', 'Iceland', 'Netherlands']
const countriesContainingLand = countries7.filter((country) => // esta es una función
    country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
// Output
//Ejemplo 7: Uso de filter para filtrar una lista de elementos
// ['Finland', 'Iceland', 'Netherlands']
const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en ia")
console.log(countriesEndsByia)
// Output
// "Ejemplo 7: Paises que terminan en ia
// ['Australia']