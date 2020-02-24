class Lannister {
	constructor () {
		console.log('A Lannister is born !'); 
	}
	get getSize() {
		return "Average";
	}
	get houseMotto() {
		return "Hear me roar!";
	}
}

module.exports = Lannister;

const Tyrion = require('./Tyrion.class.js');

let tyrion = new Tyrion();

console.log(tyrion.getSize);
console.log(tyrion.houseMotto);