const IFighter = require('./IFighter.class.js');
const NightsWatch = require('./NightsWatch.class.js');

class Varys extends IFighter {
	get pretendToFight() {
		console.log('* finds someone to fight for him *');
	}
}

let varys = new Varys();
let nw = new NightsWatch();

nw.recruit(varys);
nw.fight();