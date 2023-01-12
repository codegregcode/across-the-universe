const Planet = require('../src/planet');

describe('Planet', () => {
    describe('has a chance for life and lifeforms', () => {
        let planet;
        beforeEach(() => {
            planet = new Planet('Pla');
        });

        it('can be instantiated', () => {
            expect(new Planet).toBeInstanceOf(Object);
        });

        it('has a name', () => {
            expect(planet.name).toBeTruthy();
        });

        it('has chance of life', () => {
            expect(planet.hasOwnProperty('chanceOfLife')).toBeTruthy();
        });

        it('has lifeforms', () => {
            expect(planet.hasOwnProperty('lifeForms')).toBeTruthy();
        });
    });
});