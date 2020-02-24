const House = require('./House.class.js');

class DrHouse extends House {
	get diagnose() {
		console.log('It\'s not lupus !');
	}
}

let house = new DrHouse();
house.introduce;