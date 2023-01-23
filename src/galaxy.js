const solarSystemList = require('./solarsystemlist');

class Galaxy {
    constructor(name) {
        this.name = name;
        this.solarSystems = [];

        let numOfSSToSelect = Math.floor(Math.random() * solarSystemList.length);
        let selectedSS = new Set();
        for (let i = 0; i < numOfSSToSelect; i++) {
            let randomIndex = Math.floor(Math.random() * solarSystemList.length);
            while(selectedSS.has(randomIndex)) {
                randomIndex = Math.floor(Math.random() * solarSystemList.length);
            }
            selectedSS.add(randomIndex);
            this.solarSystems.push(solarSystemList[randomIndex])
        }
    }
};

module.exports = Galaxy;