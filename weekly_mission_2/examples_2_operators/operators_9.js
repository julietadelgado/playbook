// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]
// arr.reduce((acumulador, valorActual[, índice[, array]]) => [toDo, valorInicial])
//El valor devuelto se asigna al acumulador
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)
// Output
// Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista
// 15 ---> 0 + 1 + 2 + 3 + 4 + 5