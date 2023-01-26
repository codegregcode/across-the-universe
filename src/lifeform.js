const MAX_INTELLIGENCE = 10;
const MIN_INTELLIGENCE = -20;
const ADD_INTELLIGENCE = 1;
const TAKE_INTELLIGENCE = 1;

class Lifeforms {
    constructor() {
        this.exist = null; 
        this.intelligence = 0;
    }

    gainInt() {
        this.intelligence = Math.min(this.intelligence + ADD_INTELLIGENCE, MAX_INTELLIGENCE)
    }

    loseInt() {
        this.intelligence = Math.max(this.intelligence - TAKE_INTELLIGENCE, MIN_INTELLIGENCE);
    }
}

module.exports = Lifeforms