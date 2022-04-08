/*
  node main.js
*/

const logger1 = require('./logger_1') //importat lo exportado en logger_1
const logger2 = require('./logger_2') //importat lo exportado en logger_2

logger1('This is an informational message') //se invoca como función ya que no se asignó nomnre en logger_1 e imprime: info: This is an informational message

logger2.verbose('This is a verbose message') // se invoca a la función verbose en logger_2 e imprime: verbose: This is a verbose message