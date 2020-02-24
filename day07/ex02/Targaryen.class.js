class Targaryen {
    get getBurned() {
        if (this.resistsFire == true) {
            return "emerges naked but unharmed"
        }
        return "burns alive";
    }
}

module.exports = Targaryen;