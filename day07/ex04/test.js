Lannister = require("./Lannister.class.js");
Jaime = require("./Jaime.class.js");
Tyrion = require("./Tyrion.class.js");

class Stark {
}

class Cersei extends Lannister {
}

class Sansa extends Stark {
}

let j = new Jaime();
let c = new Cersei();
let t = new Tyrion();
let s = new Sansa();

j.sleepWith(t);
j.sleepWith(s);
j.sleepWith(c);

t.sleepWith(j);
t.sleepWith(s);
t.sleepWith(c);
