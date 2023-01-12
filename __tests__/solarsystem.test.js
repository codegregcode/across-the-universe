const SolarSystem = require('../src/solarsystem');

describe('SolarSystem', () => {
    describe('has planets a sun/s and seed of life', () => {
        let solarSystem;
        beforeEach(() => {
            solarSystem = new SolarSystem('Sol');
        });

        it('can be instantiated', () => {
            expect(new SolarSystem).toBeInstanceOf(Object);
        });

        it('has a name', () => {
            expect(solarSystem.name).toBeTruthy();
        });

        it('has planets', () => {
            expect(solarSystem.planets).toBeTruthy();
        });

        it('has a sun', () => {
            expect(solarSystem.hasOwnProperty('sun')).toBeTruthy();
        });

        it('has a seed of life', () => {
            expect(solarSystem.hasOwnProperty('seedOfLife')).toBeTruthy();
        });
    });
});