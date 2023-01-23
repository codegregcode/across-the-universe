const galaxyList = require("./galaxylists");

class Universe {
    constructor(name) {
        this.name = name;
        this.galaxies = [];
        
        let numOfGalaxiesToSelect = Math.floor(Math.random() * galaxyList.length);
        let selectedGalaxies = new Set();
        for (let i = 0; i < numOfGalaxiesToSelect; i++) {
            let randomIndex = Math.floor(Math.random() * galaxyList.length);
            while(selectedGalaxies.has(randomIndex)) {
                randomIndex = Math.floor(Math.random() * galaxyList.length);
            }
            selectedGalaxies.add(randomIndex);
            this.galaxies.push(galaxyList[randomIndex])
        }
    }
}

module.exports = Universe