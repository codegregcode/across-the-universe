const SolarSystem = require('../src/solarsystem');

describe('SolarSystem', () => {
    it('can be instantiated', () => {
        expect(new SolarSystem).toBeInstanceOf(Object);
    });
});