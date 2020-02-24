const House = require('./House.class.js');

class HouseStark extends House {
	get getHouseName() {
		return "Stark";
	}
	get getHouseMotto() {
		return "Winter is coming";
	}
	get getHouseSeat() {
		return "Winterfell";
	}
}

class HouseMartell extends House {
	get getHouseName() {
		return "Martell";
	}
	get getHouseMotto() {
		return "Unbowed, Unbent, Unbroken";
	}
	get getHouseSeat() {
		return "Sunspear";
	}
}

let houses = Array(new HouseStark(), new HouseMartell());

houses.forEach(function(house) {
	house.introduce;
});