const IFighter = require('./IFighter.class.js');
const NightsWatch = require('./NightsWatch.class.js');

class JonSnow extends IFighter {
	get fight() {
		console.log('* looses his wolf on the enemy, and charges with courage *');
	}
	get isABastard() {
		return true;
	}
}

class MaesterAemon {
	get sendRavens() {
		console.log('* sends a raven carrying an important message *');
	}
}

class SamwellTarly extends IFighter {
	get fight() {
		console.log('* flees, finds a girl, grows a spine, and defends her to the bitter end *');
	}
	get makeHisFatherProud() {
		return false;
	}
}

let jon = new JonSnow();
let aemon = new MaesterAemon();
let sam = new SamwellTarly();
let nw = new NightsWatch();

nw.recruit(jon);
nw.recruit(aemon);
nw.recruit(sam);

nw.fight();