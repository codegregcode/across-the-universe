const Galaxy = require('../src/galaxy');

describe('Galaxy', () => {
    describe('creates solar systems', () => {
        let galaxy;
        beforeEach(() => {
            galaxy = new Galaxy('Gal')
        });

        it('can be instantiated', () => {
            expect(new Galaxy).toBeInstanceOf(Object);
        });

        it('has a name', () => {
            expect(galaxy.name).toBeTruthy();
        });

        it('has solar systems', () => {
            expect(galaxy.solarSystems).toBeTruthy();
        });
    });
});