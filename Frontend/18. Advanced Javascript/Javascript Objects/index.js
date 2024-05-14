// Constructor for the object HouseKeeper
class HouseKeeper {
    constructor(name, dateBirth, hasWorkPermit, languages) {
        this.name = name;
        this.dateBirth = dateBirth;
        this.hasWorkPermit = hasWorkPermit;
        this.languages = languages;
        this.cleanMethod = function () {
            console.log("Cleaning in Progress...");
        }
    }
}
