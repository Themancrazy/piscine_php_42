class Tyrion {

	sleepWith(person) {
		if (person.constructor.name == "Sansa")
			console.log("Let's do this.")
		else
			console.log("Not even if I'm drunk !")
	}
}

module.exports = Tyrion;
