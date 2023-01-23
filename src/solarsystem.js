const planetList = require('./planetlist');

class SolarSystem {
    constructor(name) {
        this.name = name;
        this.planets = [];
        this.sun = null;
        this.seedOfLife = null;

        let numOfPlanetsToSelect = Math.floor(Math.random() * planetList.length);
        let selectedPlanets = new Set();
        for (let i = 0; i < numOfPlanetsToSelect; i++) {
            let randomIndex = Math.floor(Math.random() * planetList.length);
            while(selectedPlanets.has(randomIndex)) {
                randomIndex = Math.floor(Math.random() * planetList.length);
            }
            selectedPlanets.add(randomIndex);
            this.planets.push(planetList[randomIndex])
        }
    }
}

module.exports = SolarSystem;