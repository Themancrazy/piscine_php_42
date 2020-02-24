class NightsWatch {
    recruit(person) {
        if ((person.isABastard == true) || (person.makeHisFatherProud == false)){
            return person.fight;
        }
    }
    fight() {
    }
}

module.exports = NightsWatch;