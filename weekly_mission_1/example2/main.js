// node main.js

const logger = require('./logger') // importa lo exportado en el archivo logger.js, exports nos permite exportar valores, objetos y estilos desde los módulos de Node.js

logger.info('This is an informational message') //Llamo a la función info logger.js que junto con el mensaje que le enviamos imprime lo siguiente: info: This is an informational message
logger.verbose('This is a verbose message') //Llamo a la función verbose del archivo logger.js que junto con el mensaje que le enviamos imprime lo siguiente: verbose: This is a verbose message