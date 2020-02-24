const Targaryen = require('./Targaryen.class.js');

class Viserys extends Targaryen {
}

class Daenerys extends Targaryen {
	get resistsFire() {
		return true;
	}
}

let viserys = new Viserys();
let daenerys = new Daenerys();

console.log(`Viserys ${viserys.getBurned}`);
console.log(`Daenerys ${daenerys.getBurned}`);