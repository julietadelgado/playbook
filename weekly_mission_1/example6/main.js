require('./patcher') // Llamas este módulo que modifica el objeto instanciado
const logger = require('./logger') // Al llamar el módulo en logger.js te dará el objeto modificado

logger.customMessage()
/*logger.log('hi')
logger.log('hello')
console.log(logger.count)*/