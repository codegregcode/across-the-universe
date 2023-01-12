const Universe = require('../src/universe');

describe('Universe', () => {
    it('can be instantiated', () => {
        expect(new Universe).toBeInstanceOf(Object);
    });
});