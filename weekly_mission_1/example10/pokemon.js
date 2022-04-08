export default class Pokemon {
  constructor (name) {
    this.name = name
  }

  sayHello (message) {
  	if(message)
    	console.log(`Mi pokemon ${this.name} te comparte un mensaje: ${message}`)
   	else
   		console.log(`Mi pokemon ${this.name} te saluda!!!`)
  }

  sayMessage (message) {
    console.log(`Mi pokemon ${this.name} dice: ${message}`)
  }
}