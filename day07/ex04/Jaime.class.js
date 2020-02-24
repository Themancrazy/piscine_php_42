class Jaime {
	
	sleepWith(person) {
		if (person.constructor.name === "Tyrion")
			console.log("Not even if I'm drunk !")
		else if (person.constructor.name === "Sansa")
			console.log("Let's do this.")
		else if (person.constructor.name === "Cersei")
			console.log("With pleasure, but only in a tower in Winterfell, then.")
	}
}

module.exports = Jaime;
