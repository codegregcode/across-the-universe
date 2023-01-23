const Universe = require('../src/universe.js');

describe('Universe', () => {
    describe('creates galaxies', () => {
        let uni;
        beforeEach(() => {
            uni = new Universe('Uni');
        });
    
    it('can be instantiated', () => {
        expect(new Universe).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        expect(uni.name).toBeTruthy();
    });

    it('has  galaxies', () => {
        expect(uni.galaxies).toBeTruthy();
    })
    });
});