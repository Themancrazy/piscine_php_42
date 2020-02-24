const Lannister = require('./test.js');

class Tyrion extends Lannister {
	constructor()
	{
		super();
		console.log("My name is Tyrion");
	}

	get getSize(){
		return "Short";
	}
}

module.exports = Tyrion;