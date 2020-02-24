class House {
    get introduce() {
        if (this.getHouseName != undefined)
        console.log(`House ${this.getHouseName} of ${this.getHouseSeat} : \"${this.getHouseMotto}\"`);
    }
}

module.exports = House;